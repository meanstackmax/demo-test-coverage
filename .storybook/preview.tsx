import type { StoryFn, StoryContext } from "@storybook/react";
import "primereact/resources/primereact.min.css";
import React from "react";
import "primeflex/primeflex.scss";

const currentCustomer = "workdigital";
const stylesMap = {
  workdigital: {
    light: "",
    dark: "",
  },
};
const themes = {
  dark: stylesMap[currentCustomer].dark,
  light: stylesMap[currentCustomer].light,
};

const storiesWithEnabledLoader = ["Auto Complete"];

export const decorators = [
  (Story: StoryFn, context: StoryContext) => {
    const isInterActive = context.parameters.isInterActive;
    return (
      <>
        {isInterActive ? (
          <div style={{ height: "100vh", width: "100vw" }}>
            <Story />
          </div>
        ) : (
          <Story />
        )}
      </>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
