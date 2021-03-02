import React from "react";
import PropTypes from "prop-types";
import { GelTable } from "./GelTable";
import { Title } from "./Title";
import { GelDragDropContext, useGelDragDrop } from "./GelDragDrop.utils";
import "./style.scss";

export function GelDragDrop(props) {
  return (
    <GelDragDropContext.Provider value={useGelDragDrop(props.gelRange)}>
      <div className="gelDragDrop">
        <Title />
        <GelTable table={props.gelTable} onUpdate={props.onGelUpdate} />
      </div>
    </GelDragDropContext.Provider>
  );
}

GelDragDrop.propTypes = {
  /**
   * The bottom and top limit values of the gel slide
   */
  gelRange: PropTypes.shape({
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
   * Data needed to render the GelTable
   */
  gelTable: PropTypes.arrayOf(PropTypes.object),
  /**
   * Function to update gel position in table
   */
  onGelUpdate: PropTypes.func,
};

GelDragDrop.defaultProps = {};
