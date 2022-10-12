import React, { useState, useEffect } from "react";
import { QuestionInfo } from "../../services/api";
import { GlobalStyle, Wrapper, GenericWrapper } from "../Index/style";
import { api, DeleteQuizQuestion } from "../../services/api";
import { useHistory } from "react-router-dom";

function Question() {
  const [questions, setQuestions] = useState<QuestionInfo[]>([]);
  const history = useHistory();

  useEffect(() => {
    api.get("/api/questions").then((response) => setQuestions(response.data));
  }, []);

  const handleDeleteQuestion = async (id: number) => {
    await DeleteQuizQuestion(id);
    setQuestions((prevState) =>
      prevState.filter((question) => {
        return question.id !== id;
      })
    );
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz App - Admin</h1>
        <GenericWrapper>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Categoria</th>
                <th>Pergunta</th>
                <th>Resposta Correta</th>
                <th>Respostas Erradas</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {questions?.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.category}</td>
                    <td>{item.question}</td>
                    <td>{item.correct_answer}</td>
                    <td>
                      <ul>
                        {item.incorrect_answers.map((value, i) => {
                          return <li key={i}>{value}</li>;
                        })}
                      </ul>
                    </td>
                    <td>
                      <button
                        className="start"
                        onClick={() =>
                          history.push(`/admin/question/${item.id}`, {
                            category: item.category,
                            correct_answer: item.correct_answer,
                            incorrect_answers: item.incorrect_answers,
                            difficulty: item.difficulty,
                            question: item.question,
                          })
                        }
                      >
                        Editar
                      </button>
                      <button
                        className="start"
                        onClick={() => handleDeleteQuestion(item.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            style={{ margin: 5 }}
            className="start"
            onClick={() => history.push("/admin/question/create")}
          >
            Criar nova pergunta
          </button>
          <button className="start" onClick={() => history.push("/")}>
            Voltar para o Quiz
          </button>
        </GenericWrapper>
      </Wrapper>
    </>
  );
}

export default Question;
