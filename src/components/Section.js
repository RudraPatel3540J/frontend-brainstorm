import React from "react";
import Question from "./Question";

const Section = ({ sectionData, id }) => {
  const handleQuestionClick = () => {
    // Add any question click functionality here
  };

  return (
    <section id={id} className="section">
      <h2>{sectionData?.title}</h2>
      {sectionData?.questions?.map((question) => (
        <Question
          key={question?.id}
          question={question}
          onClick={handleQuestionClick}
        />
      ))}
    </section>
  );
};

export default Section;
