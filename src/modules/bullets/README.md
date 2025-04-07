# 💥 Bullet Module

This module handles bullet logic in the game.

## 🔫 BulletComponent

Represents a moving projectile. It is responsible for:

- Movement along a given direction.
- Accurate collision detection.
  - High-speed bullets are handled by dividing movement into small subsegments to ensure they don't skip over (small) targets.
- Damage application to enemy `Mob` units.
  - Only damages mobs on the opposing `battleSide`.
  - Each mob can only be damaged once per bullet.
- Spawning visual particle trails as it moves.
  - Spawns `BulletParticleComponent` instances at intervals to create a trail.
- Self-destruction when it goes out of the battlefield bounds.
