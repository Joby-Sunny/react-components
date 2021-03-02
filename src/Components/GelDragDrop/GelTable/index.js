import React from "react";
import PropTypes from "prop-types";
import { COL_TYPE } from "../GelDragDrop.constants";
import { MainLabelColumn } from "../MainLabelColumn";
import { LadderColumn } from "../LadderColumn";
import { TableRef, GelDragDropContext } from "../GelDragDrop.utils";
import "./style.scss";

export function GelTable(props) {
  const { calculateHeight } = React.useContext(GelDragDropContext);
  const renderColumn = (column) => {
    switch (column.colType) {
      case COL_TYPE.MAIN_LABEL:
        return <MainLabelColumn {...column} />;
      case COL_TYPE.LADDER_COLUMN:
        return <LadderColumn {...column} />;
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
   * The range for the GEL_PATH, lowest and highest values
   */
  range: PropTypes.shape({
    /**
     * The starting value for GEL_PATH
     */
    low: PropTypes.number,
    /**
     * The ending value for GEL_PATH
     */
    high: PropTypes.number,
  }),
  gelTable: PropTypes.array,
};

GelTable.defaultProps = {};
