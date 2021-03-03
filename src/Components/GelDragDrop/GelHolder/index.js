import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import { GEL_TYPE } from "../GelDragDrop.constants";
import { GelStrip } from "../GelStrip";
import "./style.scss";

/**
 * GelDragDrop - GelHolder
 *  - Cell the render the GelHolder where a gel items are initally stored.
 */
export function GelHolder(props) {
  const { height, onDragOver, onStripDrop } = React.useContext(
    GelDragDropContext
  );
  const style = { height: `${height.gelHolderBox}px` };

  const setInnerText = (gel) => {
    let text = null;
    if (gel.gelType === GEL_TYPE.LABEL) text = `${gel.value} bp`;
    return text;
  };

  const renderGel = (gel) => (
    <GelStrip
      key={gel.gelId}
      gelId={`${props.cellId}_${gel.gelId}`}
      gelType={gel.gelType}
      height={gel.height}
      opacity={gel.opacity}
      value={gel.value}
      className="gelBoxStrip__item"
    >
      {setInnerText(gel)}
    </GelStrip>
  );

  const onDrop = (event) => {
    const value = 0;
    onStripDrop({ event, cellId: props.cellId, value });
  };

  return (
    <div className={props.className} onDragOver={onDragOver} onDrop={onDrop}>
      <div className={`${props.className}_gelBox`} style={style}>
        {props.gelItems.map(renderGel)}
      </div>
    </div>
  );
}

GelHolder.propTypes = {
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

GelHolder.defaultProps = {};
