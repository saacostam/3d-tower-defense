# 3D Tower Defense

A strategy game where players defend against waves of enemies by strategically placing towers on a 3D map.

## Features

- Real-time strategy gameplay – Place towers to stop incoming enemies.
- Multiple tower types – Each with unique attack patterns and upgrades.
- Wave-based progression – Increasing difficulty with each wave.
- 3D environment – Immersive visuals and dynamic enemy movement.

##

- [Color Palette](https://lospec.com/palette-list/apollo)

## Tasks

- [x] FEAT: Place actors into a grid-like structure.
- [x] FEAT: Add three-js logic into existing game-loop.
- [x] FEAT: Implement `kill()` logic.
- [x] FEAT: Add environment elements to container.
- [x] FEAT: Create an abstraction to compose with simple meshes.
- [x] FEAT: Start modeling the world floor.
- [x] FEAT: Create mobs (no-modeling).
- [x] FEAT: Create path-finding algorithm.
- [x] FEAT: Implement cursor.
- [x] FEAT: Camera follows cursor.
- [x] FEAT: Implement wall element, that block path, if available.
- [x] FEAT: Implement simple gun.
- [x] FEAT: Implement bullet collisions.
- [x] FEAT: Implement particles for bullets.
- [x] FEAT: Test with individual gun path-finding.
- [x] FEAT: Add headquarters (HQ) to defend.
  - [x] FEAT: Create the actor and "model".
  - [x] FEAT: Add health.
- [x] FEAT: Walkers should target the HQs.
  - [x] FEAT: Update path-finding.
  - [x] FEAT: If they collide, they should attack the HQs (reduce health).
- [x] FEAT: Add explosion-like particle systems.
  - [x] FEAT: Add to walkers when they die.
- [ ] FEAT: Centralize checking for battle side.
  - NOTE: Absolute search for `instanceof Walker`.
- [ ] FEAT: Add health to enemies.
- [ ] FEAT: Create mob that breaks into smaller mobs.
- [ ] FEAT: Create tank-mob that blows-up.
  - [ ] FEAT: Create the actor and "model".
  - [ ] FEAT: Create explosion particles.
  - [ ] FEAT: Add health to towers.
  - [ ] FEAT: If a tower is close to an explosion they should reduce health.
- [ ] FEAT: Implement triple-gun.
- [ ] FEAT: Implement rocket-gun.
- [ ] FEAT: Enhance path-finding by targeting enemies closest to me but also closest to position I should defend.
- [ ] FEAT: Block wall-placement if it fully blocks a path to the objective.
- [ ] FEAT: Start modeling world decor.
  - [ ] FEAT: Model World Limits (idk... hills)
  - [ ] FEAT: Enhance mobs.
  - [ ] FEAT: Enhance guns.
  - [ ] FEAT: Enhance cursor.
- [ ] FEAT: Implement a wave-system.
  - [ ] FEAT: Scale enemy stats based on wave number.
