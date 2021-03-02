import React from "react";
import PropTypes from "prop-types";
import { MainHeader } from "./MainHeader";
import { SubmitBlock } from "./SubmitBlock";
import { Content } from "./Content";
import { GelDragDrop } from "../GelDragDrop";
import "./style.scss";

export function GelDragDropQuestion(props) {
  const isSubmitDisabled = () => false;

  return (
    <div className="geldragdropquestion">
      <MainHeader heading={props.heading} text={props.text} />
      <Content>
        <GelDragDrop
          gelRange={props.gelRange}
          gelTable={props.gelTable}
          onGelUpdate={props.onGelUpdate}
        />
      </Content>
      <SubmitBlock disabled={isSubmitDisabled()} onSubmit={props.onSubmit} />
    </div>
  );
}

GelDragDropQuestion.propTypes = {
  /**
   * Unique Id for the component
   */
  id: PropTypes.number,
  /**
   * Main heading for the quetion
   */
  heading: PropTypes.string,
  /**
   * Detailed description for the question
   */
  text: PropTypes.string,
  /**
   * Function to invoke when submit button is clicked
   */
  onSubmit: PropTypes.func,
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
