# 🧟 Mobs

This module contains the actor classes for enemies (and their management) within the game.

## Mob Base Class

This is the base class for all mobs, though direct instantiation is not expected. Shared behavior for mobs is defined here. Children that extend this class can further customize their behavior by overwriting instance configuration attributes (see the classes that extend `Mob`).

Some of the behaviors defined here include:

- Health bar lifecycle management
- Pre-death explosion animation
- Pathfinding

Because of this, classes that extend this base class should ideally call the `super` method to hook into these behaviors.

## Mob Types

- **Walker:** A basic unit without any unique characteristics.
- **Tank:** A unit with higher health and slower movement.
- **Group-Mob:** A unit that, when killed, spawns a smaller minion (`Drop`).
- **Drop:** A fast-moving, low-health mob spawned by a `Group-Mob` upon its death.

## Spawner Class

The `Spawner` is responsible for periodically generating new mobs at a specific location on the battlefield. It randomly selects between the mob types and directing them toward the player's headquarters. The spawn rate is affected by a multiplier, allowing difficulty or pacing adjustments. Spawners are only valid within a `BattleFieldContainer`.
