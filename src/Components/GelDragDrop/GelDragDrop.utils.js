import React from "react";

export const GelDragDropContext = React.createContext(null);

export const TableRef = React.createRef();

const INITIAL_HEIGHT = {
  gelPath: 1,
  gelHolderBox: 1,
  trashRow: 1,
};

export function useGelDragDrop() {
  const [height, setHeight] = React.useState(INITIAL_HEIGHT);

  function calculateHeight(tableRef) {
    const { offsetWidth } = tableRef;
    let height = { ...INITIAL_HEIGHT };
    height.gelPath = getGelPathHeight(offsetWidth);
    height.gelHolderBox = getGelBoxHeight(height.gelPath);
    height.trashRow = getTrashRowHeight(offsetWidth);
    setHeight(height);
  }

  return { height, calculateHeight };
}

function getGelPathHeight(offsetWidth) {
  return (offsetWidth * 50) / 100;
}

function getGelBoxHeight(gelPathHeight) {
  return gelPathHeight / 10;
}

function getTrashRowHeight(offsetWidth) {
  return (offsetWidth * 10) / 100;
}
