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

GelDragDrop.args = {
  gelRange: { bottom: 0, top: 1000 },
  gelTable: [
    {
      colId: 0,
      colType: "MAIN_LABEL",
      colItems: [
        { cellId: 0, cellType: "LABEL_CELL", label: "" },
        { cellId: 1, cellType: "EMPTY_GEL_HOLDER" },
        {
          cellId: 2,
          cellType: "GEL_PATH",
          gelItems: [
            {
              gelId: 0,
              gelType: "LABEL",
              height: 100,
              opacity: 1,
              value: 1000,
            },
            { gelId: 1, gelType: "LABEL", height: 100, opacity: 1, value: 800 },
            { gelId: 2, gelType: "LABEL", height: 100, opacity: 1, value: 500 },
            { gelId: 3, gelType: "LABEL", height: 100, opacity: 1, value: 300 },
            { gelId: 4, gelType: "LABEL", height: 100, opacity: 1, value: 100 },
          ],
        },
        { celId: 7, cellType: "TRASH_LABEL" },
      ],
    },
    {
      colId: 1,
      colType: "LADDER_COLUMN",
      colItems: [
        { colId: 0, cellType: "LABEL_CELL", label: "DNA Ladder" },
        { colId: 1, cellType: "GEL_HOLDER", gelItems: [] },
        {
          colId: 2,
          cellType: "GEL_PATH",
          gelItems: [
            {
              gelId: 0,
              gelType: "FIXED",
              height: 100,
              opacity: 1,
              value: 1000,
            },
            { gelId: 1, gelType: "FIXED", height: 100, opacity: 1, value: 800 },
            { gelId: 2, gelType: "FIXED", height: 100, opacity: 1, value: 500 },
            { gelId: 3, gelType: "FIXED", height: 100, opacity: 1, value: 300 },
            { gelId: 4, gelType: "FIXED", height: 100, opacity: 1, value: 100 },
          ],
        },
        {
          colId: 3,
          cellType: "TRASH_CAN",
          trashItems: [],
        },
      ],
    },
    {
      colId: 2,
      colType: "LADDER_COLUMN",
      colItems: [
        { colId: 0, cellType: "LABEL_CELL", label: "Sample" },
        {
          colId: 1,
          cellType: "GEL_HOLDER",
          gelItems: [
            {
              gelId: 0,
              gelType: "DRAGGABLE",
              height: 100,
              opacity: 1,
              value: 0,
            },
            {
              gelId: 1,
              gelType: "DRAGGABLE",
              height: 100,
              opacity: 1,
              value: 0,
            },
          ],
        },
        {
          colId: 2,
          cellType: "GEL_PATH",
          gelItems: [],
        },
        {
          colId: 3,
          cellType: "TRASH_CAN",
          trashItems: [],
        },
      ],
    },
  ],
  onGelUpdate: { action: "clicked" },
};
