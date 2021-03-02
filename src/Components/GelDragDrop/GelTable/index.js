import React from "react";
import PropTypes from "prop-types";
import { COL_TYPE } from "../GelDragDrop.constants";
import { MainLabelColumn } from "../MainLabelColumn";
import { LadderColumn } from "../LadderColumn";
import { TableRef, GelDragDropContext } from "../GelDragDrop.utils";
import "./style.scss";

export function GelTable(props) {
  const { calculateHeight } = React.useContext(GelDragDropContext);

  const renderMainLabelColumn = (column) => (
    <MainLabelColumn
      key={column.colId}
      colId={column.colId}
      colItems={column.colItems}
    />
  );

  const renderLadderColumn = (column) => (
    <LadderColumn
      key={column.colId}
      colId={column.colId}
      colItems={column.colItems}
      onUpdate={props.onUpdate}
    />
  );

  const renderColumn = (column) => {
    switch (column.colType) {
      case COL_TYPE.MAIN_LABEL:
        return renderMainLabelColumn(column);
      case COL_TYPE.LADDER_COLUMN:
        return renderLadderColumn(column);
      default:
        return null;
    }
  };

  React.useEffect(() => {
    calculateHeight(TableRef.current);
  }, []);

  return (
    <div className="gelDragDrop_table" ref={TableRef}>
      {props.table.map(renderColumn)}
    </div>
  );
}

GelTable.propTypes = {
  /**
   * Data needed to render gel Table
   */
  table: PropTypes.arrayOf(PropTypes.object),
  /**
   * Function to call to up update Gel Table
   */
  onUpdate: PropTypes.func,
};

GelTable.defaultProps = {};
