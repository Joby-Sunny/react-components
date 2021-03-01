import React from "react";
import { GelDragDropQuestion as Component } from "./index";
import { DATA_PROPS } from "./GelDragDropQuestion.constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "GelDragDropQuestion",
  component: Component,
  parameters: {},
  decorators: [
    (Story) => (
      <div style={{ margin: "auto auto", width: "600px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Component {...args} />;

export const GelDragDropQuestion = Template.bind({});

GelDragDropQuestion.args = {
  ...DATA_PROPS,
};
