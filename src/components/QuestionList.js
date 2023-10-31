import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ onDeleteQuestion }) {
  const [questionList, setQuestionList] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
    .then(response => response.json())
    .then(returnedData => {
      setQuestionList(returnedData)
    })
  }, [])

  function onDeleteQuestion(id){
    fetch (`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      const updatedQuestions = questionList.filter(question => {
        if (question.id !== id){
          return true
        }
      })
      setQuestionList(updatedQuestions)
    })
  }

  const questionItems = questionList.map((question) => {
    const {id} = question

    return (
      <QuestionItem
      key={id}
      question={question}
      onDeleteQuestion={onDeleteQuestion}
      />
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionItems}
        {/* display QuestionItem components here after fetching */}
        </ul>
    </section>
  );
}

export default QuestionList;
