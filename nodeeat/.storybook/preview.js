



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { configure, addDecorator } from "@storybook/vue";
import "vuetify/dist/vuetify.css";
// import "@/plugins/vuetify";

import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

addDecorator(() => ({
  vuetify: new Vuetify(),
  template:
    '<v-app style="background-color: white"><v-content><story/></v-content></v-app>',
}));

// automatically import all files ending in *.stories.js
//configure(require.context("../stories", true, /\.stories\.js$/), module);