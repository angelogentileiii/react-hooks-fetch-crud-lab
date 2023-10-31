import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  function handleQuestionClick(event){
    console.log(event.target)
    setPage("Form")
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleQuestionClick={handleQuestionClick}/> : <QuestionList />}
    </main>
  );
}

export default App;
