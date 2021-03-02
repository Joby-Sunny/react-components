import React from "react";
import { GelDragDropQuestion as Component } from "./index";
import { GelDragDrop } from "../GelDragDrop/GelDragDrop.stories";

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
  id: 70,
  type: "GEL_DRAG_DROP",
  content: ["heading", "text", "dragdrop"],
  heading: "Predict the gel results:",
  text:
    "Based on your understand of PCR, drag the bands in each lane from the well to where you would expect to see it relative to the DNA ladder in lane 1. If you do not expect to see a band in a lane, drag its band from the well to the area below the gel to discard it.\n\nThe gel lanes include the DNA size standard, the sample with unknown template DNA and two positive controls (Control 1 and 2) and two negative controls (Control 3 and 4).\n\nControl 1 = Positive control: normal, full length, Gene X\n\nControl 2 = Positive control: mutated, shorter, Gene X\n\nControl 3 = Negative control: no DNA template\n\nControl 4 = Negative control: prokaryotic DNA template",
  dragdrop: [],
  ...GelDragDrop.args,
};
