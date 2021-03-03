import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import { GEL_TYPE } from "../GelDragDrop.constants";
import { GelStrip } from "../GelStrip";
import "./style.scss";

/**
 * GelDragDrop - GelPath
 *  - Cell the render the GelPath where a gel item may be dragged and dropped
 *    to correct value.
 */
export function GelPath(props) {
  const {
    height,
    limit,
    onDragOver,
    getGelValue,
    onStripDrop,
  } = React.useContext(GelDragDropContext);

  const style = {
    height: `${height.gelPath}px`,
    paddingBottom: `${height.gelPathPaddingBottom}px`,
  };

  const setInnerText = (gel) =>
    gel.gelType === GEL_TYPE.LABEL ? `${gel.value} bp` : null;

  const renderGel = (gel) => (
    <GelStrip
      key={gel.gelId}
      gelId={`${props.cellId}_${gel.gelId}`}
      gelType={gel.gelType}
      height={gel.height}
      opacity={gel.opacity}
      value={gel.value}
      className="gelPathStrip__item"
    >
      {setInnerText(gel)}
    </GelStrip>
  );

  const onDrop = (event) => {
    let value = parseInt(getGelValue(event));
    value = value >= limit.bottom ? value : limit.bottom;
    onStripDrop({ event, cellId: props.cellId, value });
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
};

GelPath.defaultProps = {};
