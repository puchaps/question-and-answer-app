/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { MainContext } from "../../context/main.context";

import "./content-preview.styles.scss";

import QuestionAndAnswerItem from "../quest-and-answer-item/quest-and-answer-item.component";

const ContentPreview = () => {
  const {
    state: { questionsAndAnswer },
    dispatch,
  } = useContext(MainContext);

  return (
    <div className="content-preview">
      <div className="content-preview-title">
        <h1>Questions And Answers About Login</h1>
      </div>
      <div className="content-preview-items">
        {questionsAndAnswer.map((item) => (
          <QuestionAndAnswerItem key={item.id} {...item} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default ContentPreview;
