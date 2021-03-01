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
  const renderCell = (cell) => {
    switch (cell.cellType) {
      case CELL_TYPE.LABEL_CELL:
        return (
          <LabelCell
            className="column_mainLabel__labelCell"
            label={cell.label}
          />
        );
      case CELL_TYPE.EMPTY_GEL_HOLDER:
        return <EmptyGelHolder className="column_mainLabel__emptyGelHolder" />;
      case CELL_TYPE.GEL_PATH:
        return <GelPath className="column_mainLabel__gelPath" />;
      case CELL_TYPE.TRASH_LABEL:
        return <TrashLabel className="column_mainLabel__trashLabel" />;
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
    })
  ),
};

MainLabelColumn.defaultProps = {};
