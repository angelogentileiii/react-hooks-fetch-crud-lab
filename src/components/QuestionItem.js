import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  console.log(answers)

  const options = answers.map((answer, index) => (
   <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteQuestion(){
    onDeleteQuestion(id)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteQuestion} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
