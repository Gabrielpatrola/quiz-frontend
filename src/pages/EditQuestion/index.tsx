import React, { useState, FormEvent } from "react";
import { GlobalStyle, Wrapper, GenericWrapper } from "../Index/style";
import { UpdateQuizQuestion, Questions } from "../../services/api";
import { useHistory, useLocation, useParams } from "react-router-dom";

export interface RouteParam {
  id: string;
}

function EditQuesiton() {
  const { state } = useLocation<Questions>();
  const [question, setQuestion] = useState(state.question);
  const [category, setCategory] = useState(state.category);
  const [correctAnswer, setCorrectAnswer] = useState(state.correct_answer);
  const [incorrectAnswers, setIncorrectAnswers] = useState(
    state.incorrect_answers.toString()
  );

  console.log(state);
  const history = useHistory();
  const { id } = useParams<RouteParam>();

  const handleEditQuestion = async (e: FormEvent) => {
    e.preventDefault();

    const data: Questions = {
      question: question,
      category: category,
      correct_answer: correctAnswer,
      difficulty: state.difficulty,
      type: "multiple",
      incorrect_answers: incorrectAnswers.split(","),
    };
    await UpdateQuizQuestion(id, data);

    return history.goBack();
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz App - Admin</h1>
        <GenericWrapper>
          <form onSubmit={handleEditQuestion}>
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
              Atualizar pergunta
            </button>
          </form>
        </GenericWrapper>
      </Wrapper>
    </>
  );
}

export default EditQuesiton;
