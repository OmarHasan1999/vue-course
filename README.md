# vue-course

> Learn VUETIFY

This branch integrates Vuetify into the Vue project for UI components and styling.

## Features

- **Material Design Components:** Use pre-built Material Design components.
- **Responsive Layouts:** Easily create responsive designs with Vuetify's grid system.
- **Theme Customization:** Customize the theme to match your brand colors and styles.
- **Vue Router Integration:** Seamless integration with Vue Router for navigation.

## Example

import and use Vuetify in your main Vue instance:

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App);
app.use(Vuetify);

app.mount('#app');

```

Use Vuetify components in your Vue components

```vue
<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>Example Card</v-card-title>
        <v-card-text>
          This is an example using Vuetify components.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary">Primary Button</v-btn>
          <v-btn color="secondary">Secondary Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

```


## Project Setup

```sh
npm install
```

## vuetify install

```sh
npm install vuetify
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

