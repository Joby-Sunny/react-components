import React from "react";
import PropTypes from "prop-types";
import { CELL_TYPE } from "../GelDragDrop.constants";
import { LabelCell } from "../LabelCell";
import { GelPath } from "../GelPath";
import { GelHolder } from "../GelHolder";
import { TrashCan } from "../TrashCan";
import "./style.scss";

/**
 * GelDragDrop - LadderColumn
 *  - Render the MainLabel component that render the fixed ladder labels and trash icon
 */
export function LadderColumn(props) {
  const renderLabelCell = (cell) => (
    <LabelCell
      key={cell.cellId}
      className="column_ladderColumn__labelCell"
      label={cell.label}
    />
  );

  const renderGelHolder = (cell) => (
    <GelHolder
      key={cell.cellId}
      cellId={`${props.colId}_${cell.cellId}`}
      className="column_ladderColumn__gelHolder"
      gelItems={cell.gelItems}
      onUpdate={props.onUpdate}
    />
  );

  const renderGelPath = (cell) => (
    <GelPath
      key={cell.cellId}
      cellId={`${props.colId}_${cell.cellId}`}
      className="column_ladderColumn__gelPath"
      gelItems={cell.gelItems}
      onUpdate={props.onUpdate}
    />
  );

  const renderTrashCan = (cell) => (
    <TrashCan
      key={cell.cellId}
      cellId={`${props.colId}_${cell.cellId}`}
      className="column_ladderColumn__trashCan"
      gelItems={cell.gelItems}
      onUpdate={props.onUpdate}
    />
  );

  const renderCell = (cell) => {
    switch (cell.cellType) {
      case CELL_TYPE.LABEL_CELL:
        return renderLabelCell(cell);
      case CELL_TYPE.GEL_HOLDER:
        return renderGelHolder(cell);
      case CELL_TYPE.GEL_PATH:
        return renderGelPath(cell);
      case CELL_TYPE.TRASH_CAN:
        return renderTrashCan(cell);
      default:
        return null;
    }
  };

  return (
    <div className="gelDragDrop_table_column column_ladderColumn">
      {props.colItems.map(renderCell)}
    </div>
  );
}

LadderColumn.propTypes = {
  /**
   * Unique Id for the column;
   */
  colId: PropTypes.number,
  /**
   * Items to be rendered in the column
   */
  colItems: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique Id for cell;
       */
      cellId: PropTypes.number,
      /**
       * Type of Cell
       */
      cellType: PropTypes.string,
      /**
       * Label to display in LabelCell [LabelCell]
       */
      label: PropTypes.string,
      /**
       * List of gel Items in cell [GelPath, GelHolder]
       */
      gelItems: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  /**
   * Function to invoke when Gel Position updated
   */
  onUpdate: PropTypes.func,
};

LadderColumn.defaultProps = {};
