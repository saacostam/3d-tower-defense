export enum BackgroundSong {
  BATTLE = "battle-loop.mp3",
  HOME = "home-loop.mp3",
  PREPARATION = "preparations-loop.mp3",
}

export enum SoundEffect {
  DEATH_1 = "death-1.mp3",
  DEATH_2 = "death-2.mp3",
  SHOT = "shot.mp3",
  SPAWN = "spawn.mp3",
}

const LOOP_AUDIO_PATH = "./music/";
const SFX_AUDIO_PATH = "./sound-effects/";

export class AudioManager {
  private static instance: AudioManager;

  private audioContext: AudioContext;
  private backgroundBuffers: Map<BackgroundSong, AudioBuffer> = new Map();
  private effectBuffers: Map<SoundEffect, AudioBuffer> = new Map();

  private currentBackgroundSource?: AudioBufferSourceNode;
  private currentBackgroundSong?: BackgroundSong;

  private constructor() {
    this.audioContext = new AudioContext();
    this.preloadAll();
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  private async preloadAll() {
    await Promise.all([
      ...Object.values(BackgroundSong).map((song) =>
        this.loadBuffer(song, true),
      ),
      ...Object.values(SoundEffect).map((effect) =>
        this.loadBuffer(effect, false),
      ),
    ]);
  }

  private async loadBuffer(name: string, isBackground: boolean) {
    const path = isBackground ? LOOP_AUDIO_PATH : SFX_AUDIO_PATH;
    const response = await fetch(`${path}${name}`);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

    if (isBackground) {
      this.backgroundBuffers.set(name as BackgroundSong, audioBuffer);
    } else {
      this.effectBuffers.set(name as SoundEffect, audioBuffer);
    }
  }

  public playBackground(song: BackgroundSong) {
    if (this.currentBackgroundSong === song) return;

    this.stopBackground();

    const buffer = this.backgroundBuffers.get(song);
    if (!buffer) {
      console.warn(`Background song "${song}" not loaded.`);
      return;
    }

    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.connect(this.audioContext.destination);
    source.start(0);

    this.currentBackgroundSource = source;
    this.currentBackgroundSong = song;
  }

  public stopBackground() {
    if (this.currentBackgroundSource) {
      this.currentBackgroundSource.stop();
      this.currentBackgroundSource.disconnect();
      this.currentBackgroundSource = undefined;
      this.currentBackgroundSong = undefined;
    }
  }

  public playEffect(effect: SoundEffect) {
    const buffer = this.effectBuffers.get(effect);
    if (!buffer) {
      console.warn(`Effect "${effect}" not loaded.`);
      return;
    }

    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(this.audioContext.destination);
    source.start(0);
  }

  public async resumeAudioContextIfNeeded() {
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }
  }
}
