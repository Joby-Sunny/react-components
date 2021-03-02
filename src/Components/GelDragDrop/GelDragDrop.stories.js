import React from "react";
import { GelDragDrop as Component } from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "GelDragDrop",
  component: Component,
  parameters: {},
  decorators: [
    (Story) => (
      <div style={{ margin: "auto auto", width: "320px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Component {...args} />;

export const GelDragDrop = Template.bind({});

GelDragDrop.args = {};
