import React from "react";
import './Article.css';

function Article() {
  return (
    <div className="question-container">
      <div>
        <h2 className="question-title">What do you want to ask or share</h2>
      </div>
      
      <p className="question-info">
        This section is designed based on the type of the post. It could be developed by
        <br />
        conditional rendering. <span className="highlighted-text">For post an article, the following section would be appeared.</span>
      </p>
      
      <div className="input-group">
        <label className="input-label" htmlFor="title">Title</label>
        <input
          className="input-title"
          id="title"
          type="text"
          placeholder="Enter a descriptive title"
        />
      </div>
      
      <div className="Article-Input">
        <br />
        <br />
      <label className="input-Abstract" htmlFor="Abstract">Abstract</label>
      <input
        className="input-Abstract"
        id="Abstract"
        type="text"
        placeholder="Enter a 1-paragraph abstract"
        />
        <br />
        <br />
      <label className="input-Article" htmlFor="Article">Article Text</label>
      <input
        className="input-Article"
        id="Article"
        type="text"
        placeholder="Enter a 1-paragraph abstract"
        />
    </div>
    </div>
  );
}

export default Article;
