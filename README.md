# 3D Tower Defense

A strategy game where players defend against waves of enemies by strategically placing towers on a 3D map.

## Features

- Real-time strategy gameplay – Place towers to stop incoming enemies.
- Multiple tower types – Each with unique attack patterns and upgrades.
- Level-based progression – Increasing difficulty with each level.
- 3D environment – Immersive visuals and dynamic enemy movement.

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
- [x] FEAT: Start modeling world decor.
  - [x] FEAT: Create trees.
  - [x] FEAT: Add bonfire.
  - [x] FEAT: Add rivers and bridges.
  - [x] FEAT: Add default bush/stone/ruins.
- [x] FEAT: Create Home Page
  - [x] FEAT: Integrate React
  - [x] FEAT: Create Scene
  - [x] FEAT: Create UI (React)
- [x] FEAT: Create Level Selection
  - [x] FEAT: Create Scene
  - [x] FEAT: Create UI
- [x] FEAT: Enhance game loop II.
  - [x] FEAT: Scale enemy stats based on value (level number).
- [x] FIX: Reset HQ health when level is switched.
- [x] FEAT: Only able to place defenses in "my side of the board".
- [ ] FEAT: Block wall-placement if it fully blocks a path to the objective.
- [x] FEAT: Enable click tile and move cursor.
- [x] FEAT: Add elements using UI buttons.
- [ ] FEAT: Show feeback with copy when user can't add element to scene.
  - [x] FEAT: Non-placeable place.
  - [ ] FEAT: Not able to fully block paths.

## Tasks - Polish

- [ ] FEAT: Enhance player models.
  - [ ] FEAT: Enhance guns.
  - [ ] FEAT: Enhance cursor.
- [ ] FEAT(Spawner): Add timer-like sprite that shows timeout for spawning.

## Tasks Game Loop 2

- [ ] FEAT: Add health to towers.
  - [ ] FEAT: If a tower is close to an explosion they should reduce health.
- [ ] FEAT: Enhance mouse-and-click look-and-feel.

## Tasks - Polish 2

- [ ] FEAT: Add animals.
  - [ ] FEAT: Add birds.
  - [ ] FEAT: Add fire-flies.
- [ ] REFACTOR: Centralize grass-patch rendering
  - INFO: Some elements, such as trees, bon-fires, stones, render their own patch of grass. Ideally, they are all centralized into a single ModelingUtil method.
- [ ] FEAT: Integrate tailwind.
