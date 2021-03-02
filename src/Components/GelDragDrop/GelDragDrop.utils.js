import React from "react";
import { MAX_GEL_ITEMS_PER_HOLDER } from "./GelDragDrop.constants";

export const GelDragDropContext = React.createContext(null);

export const TableRef = React.createRef();

const INITIAL_HEIGHT = {
  gelPath: 1,
  gelHolderBox: 1,
  trashRow: 1,
};

export function useGelDragDrop(range) {
  const [height, setHeight] = React.useState(INITIAL_HEIGHT);
  const [limit] = React.useState({
    ...range,
    difference: range.top - range.bottom,
  });

  function calculateHeight(tableRef) {
    const { offsetWidth } = tableRef;
    let height = { ...INITIAL_HEIGHT };
    height.gelPath = getGelPathHeight(offsetWidth);
    height.gelHolderBox = getGelBoxHeight(height.gelPath);
    height.trashRow = getTrashRowHeight(height.gelHolderBox);
    setHeight(height);
  }

  return { height, calculateHeight, limit };
}

function getGelPathHeight(offsetWidth) {
  return (offsetWidth * 50) / 100;
}

function getGelBoxHeight(gelPathHeight) {
  return gelPathHeight / 10;
}

function getTrashRowHeight(holderBoxHeight) {
  return holderBoxHeight * (MAX_GEL_ITEMS_PER_HOLDER + 1);
}
