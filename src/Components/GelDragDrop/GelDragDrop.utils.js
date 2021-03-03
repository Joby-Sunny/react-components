import React from "react";
import {
  MAX_GEL_ITEMS_PER_HOLDER,
  GEL_DRAG_DROP,
} from "./GelDragDrop.constants";

export const GelDragDropContext = React.createContext(null);

export const TableRef = React.createRef();

const INITIAL_HEIGHT = {
  gelPath: 1,
  gelPathPaddingBottom: 1,
  gelHolderBox: 1,
  trashRow: 1,
};

export function useGelDragDrop(range, onGelUpdate) {
  const [height, setHeight] = React.useState(INITIAL_HEIGHT);
  const [limit] = React.useState({
    ...range,
    difference: range.top - range.bottom,
  });

  // Function to calculate Gel-Table Dimensions
  function calculateHeight(tableRef) {
    const { offsetWidth } = tableRef;
    let height = { ...INITIAL_HEIGHT };
    height.gelPath = getGelPathHeight(offsetWidth);
    height.gelHolderBox = getGelBoxHeight(height.gelPath);
    height.gelPathPaddingBottom = getGelPathPaddingBottom(height.gelHolderBox);
    height.trashRow = getTrashRowHeight(height.gelHolderBox);
    setHeight(height);
  }

  // Function to allow dagging over other elements
  const onDragOver = (event) => event.preventDefault();

  // Function to calculate new-gel-value
  const getGelValue = ({ currentTarget, clientY }) => {
    if (!currentTarget) return;
    const { top, bottom } = currentTarget.getBoundingClientRect();
    const gelPathLength = bottom - top - height.gelPathPaddingBottom;
    const deltaYValue = clientY - top;
    return limit.top - (deltaYValue * limit.difference) / gelPathLength;
  };

  // Function to invoke on GelStripDrop
  const onStripDrop = ({ event, value, cellId }) => {
    let [colId, prevCellId, gelId] = event.dataTransfer
      .getData(GEL_DRAG_DROP.GEL_ID)
      .split("_");
    let [currentColId, currentCellId] = cellId.split("_");
    if (colId === currentColId) {
      onGelUpdate({
        colId,
        prevCellId,
        currentCellId,
        gelId,
        value,
      });
    }
  };

  return {
    height,
    calculateHeight,
    limit,
    onDragOver,
    getGelValue,
    onStripDrop,
  };
}

function getGelPathHeight(offsetWidth) {
  return offsetWidth / 2;
}

function getGelBoxHeight(gelPathHeight) {
  return gelPathHeight / 10;
}

function getGelPathPaddingBottom(holderBoxHeight) {
  return holderBoxHeight + 5;
}

function getTrashRowHeight(holderBoxHeight) {
  return holderBoxHeight * (MAX_GEL_ITEMS_PER_HOLDER + 1);
}
