export const COL_TYPE = {
  MAIN_LABEL: "MAIN_LABEL",
  LADDER_COLUMN: "LADDER_COLUMN",
};

export const CELL_TYPE = {
  LABEL_CELL: "LABEL_CELL",
  EMPTY_GEL_HOLDER: "EMPTY_GEL_HOLDER",
  GEL_PATH: "GEL_PATH",
  TRASH_LABEL: "TRASH_LABEL",
  GEL_HOLDER: "GEL_HOLDER",
  TRASH_CAN: "TRASH_CAN",
};

export const GEL_TYPE = {
  LABEL: "LABEL",
  FIXED: "FIXED",
  DRAGGABLE: "DRAGGABLE",
};

export const GEL_DATA = {
  gelRange: { low: 0, high: 1000 },
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
              value: 1000,
            },
            {
              gelId: 1,
              gelType: "DRAGGABLE",
              height: 100,
              opacity: 1,
              value: 800,
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
};
