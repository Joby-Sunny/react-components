import React from "react";
import PropTypes from "prop-types";
import { CELL_TYPE } from "../GelDragDrop.constants";
import { LabelCell } from "../LabelCell";
import { EmptyGelHolder } from "../EmptyGelHolder";
import { GelPath } from "../GelPath";
import "./style.scss";
import { TrashLabel } from "../TrashLabel";

/**
 * GelDragDrop - MainLabelColumn
 *  - Render the MainLabel component that render the fixed ladder labels and trash icon
 */
export function MainLabelColumn(props) {
  const renderLabelCell = (cell) => (
    <LabelCell
      key={cell.cellId}
      className="column_mainLabel__labelCell"
      label={cell.label}
    />
  );

  const renderGelHolder = (cell) => (
    <EmptyGelHolder
      key={cell.cellId}
      className="column_mainLabel__emptyGelHolder"
    />
  );

  const renderGelPath = (cell) => (
    <GelPath
      key={cell.cellId}
      className="column_mainLabel__gelPath"
      cellId={`${props.colId}_${cell.cellId}`}
      gelItems={cell.gelItems}
    />
  );

  const renderTrashLabel = (cell) => (
    <TrashLabel key={cell.cellId} className="column_mainLabel__trashLabel" />
  );

  const renderCell = (cell) => {
    switch (cell.cellType) {
      case CELL_TYPE.LABEL_CELL:
        return renderLabelCell(cell);
      case CELL_TYPE.EMPTY_GEL_HOLDER:
        return renderGelHolder(cell);
      case CELL_TYPE.GEL_PATH:
        return renderGelPath(cell);
      case CELL_TYPE.TRASH_LABEL:
        return renderTrashLabel(cell);
      default:
        return null;
    }
  };

  return (
    <div className="gelDragDrop_table_column column_mainLabel">
      {props.colItems.map(renderCell)}
    </div>
  );
}

MainLabelColumn.propTypes = {
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
       * List of gel Items to be displayed in column
       */
      gelItems: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Unique id for the gel
           */
          gelId: PropTypes.number,
          /**
           * Type of Gel
           */
          gelType: PropTypes.oneOf(["LABEL"]),
          /**
           * Height value of Gel Strip
           */
          height: PropTypes.number,
          /**
           * Opacity value for Gel Strip
           */
          opacity: PropTypes.number,
          /**
           * Position Value for Gel
           */
          value: PropTypes.number,
        })
      ),
    })
  ),
};

MainLabelColumn.defaultProps = {};
