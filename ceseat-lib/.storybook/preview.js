



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

import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

export const decorators = [
  withVuetify
]

