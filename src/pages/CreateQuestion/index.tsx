import React, { useState, FormEvent } from "react";
import { GlobalStyle, Wrapper, GenericWrapper } from "../Index/style";
import { CreateQuizQuestion, Questions } from "../../services/api";
import { useHistory } from "react-router-dom";

function CreateQuestion() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState("");

  const history = useHistory();

  const handleCreateQuestion = async (e: FormEvent) => {
    e.preventDefault();

    const data: Questions = {
      question: question,
      category: category,
      correct_answer: correctAnswer,
      difficulty: "easy",
      type: "multiple",
      incorrect_answers: incorrectAnswers.split(","),
    };
    await CreateQuizQuestion(data);

    return history.goBack()
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz App - Admin</h1>
        <GenericWrapper>
          <form onSubmit={handleCreateQuestion}>
            <div>
              <label>Categoria:</label>
              <input
                type="text"
                value={category}
                placeholder={"Categoria"}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <label>Pergunta:</label>
              <input
                type="text"
                value={question}
                placeholder={"Pergunta"}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div>
              <label>Reposta Correta:</label>
              <input
                type="text"
                value={correctAnswer}
                placeholder={"Pergunta"}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              />
            </div>
            <div>
              <label>Repostas Erradas:</label>
              <input
                type="text"
                value={incorrectAnswers}
                placeholder={
                  "Separadas por virgula (ex: resposta1, resposta2, resposta3"
                }
                onChange={(e) => setIncorrectAnswers(e.target.value)}
              />
            </div>
            <button className="start" type="submit">
              Criar pergunta
            </button>
          </form>
        </GenericWrapper>
      </Wrapper>
    </>
  );
}

export default CreateQuestion;
