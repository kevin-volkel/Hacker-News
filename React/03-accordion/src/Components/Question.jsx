import React, { useState } from "react";

const Question = ({ id, title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [slide, setSlide] = useState('none')

  const toggleAnswer = () => {
    setSlide( (!showAnswer) ? 'down' : 'up')
    if (showAnswer) {
      setShowAnswer(!showAnswer);
    } else {
      setTimeout(() => setShowAnswer((prevValue) => !prevValue), 500);
    }
  };

  return (
    <div>
      <div className="question">
        <div className="title">
          <h4>{title}</h4>
          <button className="expand" onClick={toggleAnswer}>
            {showAnswer ? "-" : "+"}
          </button>
        </div>
        <div className={`info ${(slide === 'down') ? 'showing' : (slide === 'up') ? 'hidden' : ''}`}>
          <p>{showAnswer && info}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
