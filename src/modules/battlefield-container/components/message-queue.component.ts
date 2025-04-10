import { Vector3 } from "three";
import { Component, Composite, Container, Game } from "../../game";

export interface Message {
  id: string;
  message: string;
  totalDuration: number;
  currentDuration: number;
}

export type AddMessageCommand = (
  message: string,
  config?: {
    id?: string;
    duration?: number;
  },
) => void;

export class MessageQueueComponent extends Component {
  private static DEFAULT_DURATION = 3000;

  public messages: Message[] = [];

  public shouldRenderNextFrame = false;

  constructor() {
    const mesh = new Composite({
      center: new Vector3(0, 0, 0),
      parts: [],
    });
    super({ mesh });
  }

  public addMessage: AddMessageCommand = (message, config) => {
    const id = config?.id;
    const duration = config?.duration ?? MessageQueueComponent.DEFAULT_DURATION;

    const messageAlreadyExists = this.messages.find(
      ({ id: existingMessageId }) => existingMessageId === id,
    );
    if (messageAlreadyExists) {
      // we delete the message if it already exists
      this.messages = this.messages.filter(
        ({ id: existingMessageId }) => existingMessageId !== id,
      );
    }

    const now = Date.now();
    this.messages.push({
      id: id ?? now.toString(),
      message,
      totalDuration: duration,
      currentDuration: 0,
    });

    this.shouldRenderNextFrame = true;
  };

  public update(game: Game, delta: number, container: Container): void {
    super.update(game, delta, container);

    let anyMessageExpired = this.shouldRenderNextFrame;
    this.shouldRenderNextFrame = false;

    // update duration and remove messages that have expired
    this.messages = this.messages.filter((message) => {
      message.currentDuration += delta;

      const expired = message.currentDuration > message.totalDuration;
      anyMessageExpired = anyMessageExpired || expired;

      return !expired;
    });

    if (anyMessageExpired) game.triggerRender();
  }
}
