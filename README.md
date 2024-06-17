# vue-course

> Vuex State Management

This branch contains the implementation using Vuex for state management.

## Features

- **Centralized State Management:** Manage application state in a centralized store.
- **Getters:** Define and access derived state based on the store's state.
- **Mutations:** Synchronously modify the store's state.
- **Actions:** Dispatch asynchronous operations that commit mutations.
- **Modules:** Organize the store into modules for better structure and scalability.

## Example

### Store Setup

```javascript
// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    message: 'Hello, Vuex!'
  },
  getters: {
    message: (state) => state.message
  },
  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit('setMessage', newMessage);
    }
  },
  modules: {}
});

```

### Vue Component

Next, use the Vuex store in a Vue component:

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['message'])
  },
  methods: {
    ...mapActions(['updateMessage']),
    changeMessage() {
      this.updateMessage('Hello, updated Vuex message!');
    }
  }
};
</script>


```


## Project Setup

```sh
npm install
```
## vuex install

```sh
npm i vuex
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
