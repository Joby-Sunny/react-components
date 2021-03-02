import React from "react";
import PropTypes from "prop-types";
import { GEL_DATA } from "./GelDragDrop.constants";
import { GelTable } from "./GelTable";
import { Title } from "./Title";
import { GelDragDropContext, useGelDragDrop } from "./GelDragDrop.utils";
import "./style.scss";

export function GelDragDrop(props) {
  return (
    <GelDragDropContext.Provider value={useGelDragDrop()}>
      <div className="gelDragDrop">
        <Title />
        <GelTable
          range={GEL_DATA.gelRange}
          table={GEL_DATA.gelTable}
          onUpdate={props.onGelUpdate}
        />
      </div>
    </GelDragDropContext.Provider>
  );
}

GelDragDrop.propTypes = {
  /**
   * The bottom and top limit values of the gel slide
   */
  getRange: PropTypes.shape({
    /**
     * The lower limit of range
     */
    bottom: PropTypes.number,
    /**
     * The upper limit of range
     */
    top: PropTypes.number,
  }),
  /**
   * Function to update gel position in table
   */
  onGelUpdate: PropTypes.func,
};

GelDragDrop.defaultProps = {
  onTableUpdate: console.log,
};
