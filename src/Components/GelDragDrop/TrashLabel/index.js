import React from "react";
import PropTypes from "prop-types";
import TrashCan from "./Trash.svg";
import "./style.scss";

/**
 * GelDragDrop - TrashLabel
 *  - Cell that renders the top Label
 */
export function TrashLabel(props) {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    const { offsetWidth } = document.querySelector(".gelDragDrop");
    const trashRowHeight = (offsetWidth * 10) / 100;
    let height = `${trashRowHeight}px`;
    setStyle({ height });
  }, []);

  return (
    <div className={props.className} style={style}>
      <img
        className={`${props.className}_label`}
        src={TrashCan}
        alt="trash can"
      />
    </div>
  );
}

TrashLabel.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

TrashLabel.defaultProps = {};
