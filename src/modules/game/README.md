# 👾 Game Architecture

## 🎮 Game

The Game class manages rendering, keyboard input, and container switching. It uses a WebGLRenderer to render the game and handles window resizing.

## 🌃 Container

The Container class groups and encapsulates elements of a scene—for example, a level, a menu screen, etc.

It has:

- Actors inside the actors grid (2D matrix), where position is considered (for path-finding) in the lifecycle.
- Components inside the components array, where position isn’t considered, but the lifecycle is still managed.

Every container has a React component associated with it that helps render UI elements using React, as an overlay to the main rendering canvas. This is possible because of two methods:

- `provideProps()` returns the necessary props used for rendering the UI. This is how data is passed from the game to the UI.
- `game.triggerRender` (**Note:** In the Game class) serves as a way to trigger a render of the container component. It calls the provideProps method again and updates the UI.

**Note:** The React lifecycle is not fully integrated—this is an area for potential improvement in the future.

## 🧙‍♂️ Actor

An element within the scene that has a managed lifecycle, where positioning in the scene is important. For instance, enemies, guns, and blocks should be considered for path-finding.

The main lifecycle hooks are:

- `afterSpawn`: Called only once after being added to the container/scene.
- `update`: Called on every render (as often as possible). Used for managing the state of the game.
- `graphics`: Called on every render (as often as possible). Used for updating visual/graphic elements based on state updates.
- `kill`: Not called automatically; it is expected to be called by the consumer to mark the actor as dead and hook into the container/scene cleanup cycle on the next update.
- `beforeDeath`: Called only once, right before the element is deleted from the container/scene.

## 🌱 Component

An element within the scene that has a managed lifecycle, but positioning isn’t important. Good use cases for this class are scene elements that are not interactive—for example, stars, scenery, etc.

The main lifecycle hooks are:

- `update`: Called on every render (as often as possible). Used for managing the state of the game.
- `graphics`: Called on every render (as often as possible). Used for updating visual/graphic elements based on state updates.
- `kill`: Not called automatically; it is expected to be called by the consumer to mark the component as dead and hook into the container/scene cleanup cycle on the next update.
