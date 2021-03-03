import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import { GelStrip } from "../GelStrip";
import "./style.scss";

/**
 * GelDragDrop - TrashCan
 *  - Cell that renders the top Label
 */
export function TrashCan(props) {
  const { height, onDragOver, onStripDrop } = React.useContext(
    GelDragDropContext
  );
  const style = { height: `${height.trashRow}px` };

  const setInnerText = (gel) => {
    let text = `${gel.gelId + 1}`;
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
      className="gelTrashStrip__item"
    >
      {setInnerText(gel)}
    </GelStrip>
  );

  const onDrop = (event) => {
    const value = 0;
    onStripDrop({ event, cellId: props.cellId, value });
  };

  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={props.className}
      style={style}
    >
      {props.gelItems.map(renderGel)}
    </div>
  );
}

TrashCan.propTypes = {
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
      gelType: PropTypes.oneOf(["DRAGGABLE", "FIXED"]),
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

TrashCan.defaultProps = {};
