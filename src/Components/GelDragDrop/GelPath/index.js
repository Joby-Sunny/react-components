import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import { GelStrip } from "../GelStrip";
import { GEL_DRAG_DROP } from "../GelDragDrop.constants";
import "./style.scss";

/**
 * GelDragDrop - GelPath
 *  - Cell the render the GelPath where a gel item may be dragged and dropped
 *    to correct value.
 */
export function GelPath(props) {
  const { height, limit } = React.useContext(GelDragDropContext);
  const style = { height: `${height.gelPath}px` };

  const renderGel = (gel) => (
    <GelStrip
      key={gel.gelId}
      gelId={`${props.cellId}_${gel.gelId}`}
      gelType={gel.gelType}
      height={gel.height}
      opacity={gel.opacity}
      value={gel.value}
      className="gelPathStrip__item"
    />
  );

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const getGelValue = ({ target, clientY }) => {
    const { top, bottom } = target.getBoundingClientRect();
    const gelPathLength = bottom - top - 5;
    const deltaYValue = clientY - top;
    return limit.top - (deltaYValue * limit.difference) / gelPathLength;
  };

  const onDrop = (event) => {
    let [colId, cellId, gelId] = event.dataTransfer
      .getData(GEL_DRAG_DROP.GEL_ID)
      .split("_");
    let computedValue = parseInt(getGelValue(event));
    props.onUpdate({ colId, cellId, gelId, value: computedValue });
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
   * Unique Id for the cell
   */
  cellId: PropTypes.string,
  /**
   * List of GelItems to be renderd heree
   */
  gelItems: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique Id for Gel
       */
      gelId: PropTypes.number,
      /**
       * Type of Gel-Strip
       */
      gelType: PropTypes.oneOf(["LABEL", "DRAGGABLE", "FIXED"]),
      /**
       * Height value go Gel
       */
      height: PropTypes.number,
      /**
       * Opacity value of Gel
       */
      opacity: PropTypes.number,
      /**
       * Postion value of Gel
       */
      value: PropTypes.number || null,
    })
  ),
  /**
   * Function to call when an item is dropped here.
   */
  onUpdate: PropTypes.func,
};

GelPath.defaultProps = {};
