/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import "./quest-and-answer-item.styles.scss";

import toggleInfoAC from "../../reducer/actions/main.actions";

import InfoItem from "../info-item/info-item.component";

const QuestionAndAnswerItem = ({ title, info, showInfo, dispatch, id }) => (
  <div className="question-and-answer-item">
    <div className="title-show-more">
      <div className="title">{title}</div>
      <div
        className={`show-more ${showInfo ? "active" : ""}`}
        onClick={() => dispatch(toggleInfoAC(id))}
      >
        &#10010;
      </div>
    </div>
    <div className="info">{showInfo && <InfoItem info={info} />}</div>
  </div>
);

export default QuestionAndAnswerItem;
