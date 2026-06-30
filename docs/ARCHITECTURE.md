# Architecture

## Application

React

↓

Feature Modules

↓

Shared Components

↓

Three.js Engine

---

## Folder Structure

```text
src/

app/

core/

features/

shared/

three/

styles/
```

---

## Rules

Every feature owns:

- Components
- Hooks
- Types
- Constants

Shared code lives inside shared/.

Three.js code lives inside three/.