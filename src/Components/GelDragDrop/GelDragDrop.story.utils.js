import React from "react";
import { GelDragDrop } from "./index";

const ON_GEL_UPDATE = "ON_GEL_UPDATE";

export const Template = (args) => {
  const [state, dispatch] = React.useReducer(templatReducer, args);

  const onGelUpdate = (params) => {
    dispatch({ type: ON_GEL_UPDATE, payload: params });
  };

  return (
    <GelDragDrop
      gelRange={state.gelRange}
      gelTable={state.gelTable}
      onGelUpdate={onGelUpdate}
    />
  );
};

function templatReducer(state, action) {
  switch (action.type) {
    case ON_GEL_UPDATE:
      return onGelValueUpdate(state, action.payload);
    default:
      return state;
  }
}

function onGelValueUpdate(state, payload) {
  const gelTable = state.gelTable.map((col) => {
    if (col.colId === parseInt(payload.colId)) {
      let previousCellIndex = col.colItems.findIndex(
        (cell) => cell.cellId === parseInt(payload.prevCellId)
      );
      let currentCellIndex = col.colItems.findIndex(
        (cell) => cell.cellId === parseInt(payload.currentCellId)
      );
      if (previousCellIndex !== currentCellIndex) {
        let gelItem = col.colItems[previousCellIndex].gelItems.find(
          (gel) => gel.gelId === parseInt(payload.gelId)
        );
        gelItem = { ...gelItem, value: payload.value };

        let previousCell = {
          ...col.colItems[previousCellIndex],
          gelItems: col.colItems[previousCellIndex].gelItems.filter(
            (gel) => gel.gelId !== parseInt(payload.gelId)
          ),
        };

        let currentCell = {
          ...col.colItems[currentCellIndex],
          gelItems: [...col.colItems[currentCellIndex].gelItems, gelItem],
        };

        return {
          ...col,
          colItems: col.colItems.map((cell, index) => {
            if (index === previousCellIndex) return previousCell;
            else if (index === currentCellIndex) return currentCell;
            else return cell;
          }),
        };
      } else {
        return {
          ...col,
          colItems: col.colItems.map((cell, index) => {
            if (index === currentCellIndex) {
              return {
                ...cell,
                gelItems: cell.gelItems.map((gel) => {
                  if (gel.gelId === parseInt(payload.gelId)) {
                    return { ...gel, value: payload.value };
                  }
                  return { ...gel };
                }),
              };
            }
            return { ...cell };
          }),
        };
      }
    }
    return { ...col };
  });
  return { ...state, gelTable };
}
