# vue-course

> LEARN VUEJS 3 COMPOSITION API

This branch contains the implementation using the Vue Composition API.

## Features

- **Reactive State:** Use `ref` and `reactive` for state management.
- **Composable Functions:** Encapsulate and reuse logic across components.
- **Lifecycle Hooks:** Import and use lifecycle hooks like `onMounted`, `onUpdated`, and `onUnmounted`


```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    const message = ref('Hello, Vue Composition API!');
    return { message };

</script>
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
