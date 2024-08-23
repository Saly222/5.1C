import React from "react";
import './Question.css';

function Question() {
  return (
    <div className="question-container">
      <div>
        <h2 className="question-title">What do you want to ask or share</h2>
      </div>
      
      <p className="question-info">
        This section is designed based on the type of the post. It could be developed by
        <br />
        conditional rendering. <span className="highlighted-text">For post a question, the following section would be appeared.</span>
      </p>
      
      <div className="input-group">
        <label className="input-label" htmlFor="title">Title</label>
        <input
          className="input-title"
          id="title"
          type="text"
          placeholder="Start your question with how, what, why, etc."
        />
      </div>
      
      <div className="input-description">
        <br />
        <br />
      <label className="input-label" htmlFor="description">Describe your problem</label>
      <input
        className="input-description"
        id="description"
        type="text"
        />
      </div>
    </div>
  );
}

export default Question;
