import { Vector3 } from "three";
import { Container } from "../game";
import { Particle } from "./particle";
import { CreateExplosionArgs, CreateSmokeArgs } from "./particle.type";

export const ParticleManager = {
  createExplosion(
    container: Container,
    position: Vector3,
    args: CreateExplosionArgs,
  ) {
    const { colors } = args;

    const amount = args.amount ?? 10;
    const usableColors = Array.isArray(colors) ? colors : [colors];

    for (let i = 0; i < amount; i++) {
      const particle = new Particle({
        position: position.clone(),
        color: usableColors[Math.floor(Math.random() * usableColors.length)],
        force: args.force,
        size: args.size,
      });
      container.addComponent(particle);
    }
  },
  createSingleSmokeParticle(
    container: Container,
    position: Vector3,
    args: CreateSmokeArgs,
  ) {
    const { colors } = args;
    const usableColors = Array.isArray(colors) ? colors : [colors];
    const color = usableColors[Math.floor(Math.random() * usableColors.length)];

    const particle = new Particle({
      position: position.clone(),
      color,
      force: args.force,
      size: args.size,
      gravity: args.gravity,
      shouldFadeout: true,
    });
    container.addComponent(particle);
  },
};
