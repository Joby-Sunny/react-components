import React from "react";
import PropTypes from "prop-types";
import { GEL_DATA } from "./GelDragDrop.constants";
import { GelTable } from "./GelTable";
import { Title } from "./Title";
import "./style.scss";

export function GelDragDrop(props) {
  return (
    <div className="gelDragDrop">
      <Title />
      <GelTable
        range={GEL_DATA.gelRange}
        table={GEL_DATA.gelTable}
        update={props.onTableUpdate}
      />
    </div>
  );
}

GelDragDrop.propTypes = {
  /**
   * Function to update gel position in table
   */
  onTableUpdate: PropTypes.func,
};

GelDragDrop.defaultProps = {
  onTableUpdate: console.log,
};
