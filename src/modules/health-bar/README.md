# ❤️ HealthBar Module

Handles the display of a health bar.

## 📊 HealthBar

Represents an entity's health visually.

- Scales the bar based on current health.
- Updates dynamically with new health and position.

## 🔁 Lifecycle Integration

The `HealthBar` is designed to act as a visual "child" of an actor. To manage it properly:

- Call `start(container)` when the parent actor is added to the scene.
- Call `end(container)` when the actor is removed.

For further example, check the usage of this class.
