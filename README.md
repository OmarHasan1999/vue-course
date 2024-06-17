# vue-course

> LEARN VUEJS 3 OPTIONS API


This branch contains the implementation using the Vue Option API

## the Features

- **Reactive Data:** Easy state management using the `data` option.
- **Computed Properties:** Define properties that depend on other properties using the `computed` option.
- **Lifecycle Hooks:** Easily manage component lifecycle with hooks like `created`, `mounted`, `updated`, and `destroyed`

## Example 


```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue Option API!'
    };
  }
};
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


