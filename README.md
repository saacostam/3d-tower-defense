# 3D Tower Defense

A real-time strategy game where players defend against waves of enemies by placing towers on a dynamic 3D map. Plan your defenses, manage resources, and adapt your strategy to survive increasingly difficult enemy waves.

## Features

- **Real-time strategy gameplay** – Place towers to stop incoming enemies before they reach your base.
- **Multiple tower types** – Deploy different types of towers, each with unique attack styles and range.
- **Hybrid controls** – Use mouse clicks, keyboard shortcuts (Z, X, C), or UI buttons for full control.
- **3D environment** – Built with Three.js for immersive visuals and animated enemy movement.
- **Single level map** – Focused, tight gameplay experience with one handcrafted map.

## Technologies Used

- **Three.js** for 3D rendering
- **React** (used as an overlay, not integrated via R3F)
- **Vite** as the build tool and bundler
- **NPM** as the package manager

> Note: React was used as an overlay UI layer. Although not reactive to game state by default, a custom rerender function was used to synchronize updates.

## Motivation

The goal of this project was to explore more advanced features in game developments, using Three.js, including:

- UI elements layered over 3D scenes
- Menus and interactions
- Audio integration
- Pathfinding logic
- Lighting and visual polish
- Collision detection and state-based animation

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## Limitations

- Only one level/map currently included.
- Game originally intended to support multiple levels and progression, but the core mechanics were the main priority.

## Future Improvements

- Additional levels and map variations
- Upgradable towers
- Enemies that can damage or destroy defenses

## License

This project is licensed under the MIT [License]](./LICENSE).
