# 3D Tower Defense

A strategy game where players defend against waves of enemies by strategically placing towers on a 3D map.

## Features

- Real-time strategy gameplay – Place towers to stop incoming enemies.
- Multiple tower types – Each with unique attack patterns and upgrades.
- Level-based progression – Increasing difficulty with each level.
- 3D environment – Immersive visuals and dynamic enemy movement.

## Resources

- [Color Palette](https://lospec.com/palette-list/apollo)

## Tasks - Basics

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
- [x] FEAT: Centralize checking for battle side.
- [x] FEAT: Add health to enemies.
- [x] FEAT: Create mob that breaks into smaller mobs.
- [x] FEAT: Create tank-mob.
- [x] FEAT: Implement rocket-gun.
- [x] FEAT: Enhance path-finding by targeting enemies closest to me but also closest to position I should defend.
- [x] FEAT: Start modeling world decor.
  - [x] FEAT: Model World Limits (idk... hills)
  - [x] FEAT: Enhance mobs.

## Tasks - Game Loop

- [x] FEAT: Enhance game loop I.
  - [x] FEAT: Define a level.
- [ ] FEAT: Start modeling world decor.
  - [x] FEAT: Create trees.
  - [x] FEAT: Add bonfire.
  - [x] FEAT: Add rivers and bridges.
  - [ ] FEAT: Add default bush/stone/ruins.
- [ ] FEAT: Enhance game loop II.
  - [ ] FEAT: Scale enemy stats based on level number.
- [ ] FEAT: Enhance player models.
  - [ ] FEAT: Enhance guns.
  - [ ] FEAT: Enhance cursor.
- [ ] FEAT: Add health to towers.
- [ ] FEAT: Block wall-placement if it fully blocks a path to the objective.
  - [ ] FEAT: If a tower is close to an explosion they should reduce health.
- [ ] FEAT: Only able to place defenses in "my side of the board".

## Tasks - Polish

- [ ] FEAT(Spawner): Add timer-like sprite that shows timeout for spawning.
- [ ] FEAT: Add animals.
  - [ ] FEAT: Add birds.
