import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import { GelStrip } from "../GelStrip";
import "./style.scss";

/**
 * GelDragDrop - GelPath
 *  - Cell the render the GelPath where a gel item may be dragged and dropped
 *    to correct value.
 */
export function GelPath(props) {
  const [value, setValue] = React.useState(0);
  const { height } = React.useContext(GelDragDropContext);
  const style = { height: `${height.gelPath}px` };

  const renderGel = (gel) => (
    <GelStrip className="gelPathStrip__item" {...gel} />
  );

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    let data = event.dataTransfer.getData("text");
    let { top, bottom } = event.target.getBoundingClientRect();
    let actualLength = bottom - top - 5;
    let actualYValue = event.clientY - top;
    let computedValue = 1000 - (actualYValue * 1000) / actualLength;
    console.log("computed value", computedValue);
  };

  return (
    <div
      style={style}
      className={props.className}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {props.gelItems.map(renderGel)}
    </div>
  );
}

GelPath.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
  /**
   * List of Gel Items to display on the Gel Path.
   */
  gelItems: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique Id for the Gel
       */
      id: PropTypes.number,
      /**
       * Type of Gel
       */
      gelType: PropTypes.string,
      /**
       * Height value for the gel
       */
      height: PropTypes.number,
      /**
       * Opacity value for the gel
       */
      opacity: PropTypes.number,
      /**
       * Slide value of gel
       */
      value: PropTypes.number,
    })
  ),
};

GelPath.defaultProps = {};
