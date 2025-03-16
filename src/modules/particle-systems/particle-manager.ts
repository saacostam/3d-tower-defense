import { Color, Vector3 } from "three";
import { Container } from "../game";
import { Particle } from "./particle";

export const ParticleManager = {
  createExplosion(
    container: Container,
    position: Vector3,
    colors: Color | Color[],
    size: number = 10,
    args?: {
      force?: number;
      size?: number;
    },
  ) {
    const usableColors = Array.isArray(colors) ? colors : [colors];

    for (let i = 0; i < size; i++) {
      const particle = new Particle({
        position: position.clone(),
        color: usableColors[Math.floor(Math.random() * usableColors.length)],
        force: args?.force,
        size: args?.size,
      });
      container.addComponent(particle);
    }
  },
};
