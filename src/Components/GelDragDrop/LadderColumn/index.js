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
  const renderCell = (cell) => {
    switch (cell.cellType) {
      case CELL_TYPE.LABEL_CELL:
        return (
          <LabelCell
            className="column_ladderColumn__labelCell"
            label={cell.label}
          />
        );
      case CELL_TYPE.GEL_HOLDER:
        return (
          <GelHolder className="column_ladderColumn__gelHolder" {...cell} />
        );
      case CELL_TYPE.GEL_PATH:
        return <GelPath className="column_ladderColumn__gelPath" {...cell} />;
      case CELL_TYPE.TRASH_CAN:
        return <TrashCan className="column_ladderColumn__trashCan" />;
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
    })
  ),
};

LadderColumn.defaultProps = {};
