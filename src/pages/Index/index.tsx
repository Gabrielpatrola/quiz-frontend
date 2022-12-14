import React, { useState, useEffect } from "react";
import QuestionCard from "../../components/QuestionCard";
import { fetchQuizQuestion } from "../../services/api";
import { QuestionState } from "../../services/api";
import { GlobalStyle, Wrapper, GenericWrapper } from "./style";
import { useHistory } from "react-router-dom";

export type UserAnswer = {
  question: string;
  answer: string | undefined;
  correctAnswer: string;
  correct: boolean;
};

function Index() {
  const TOTAL_QUESTIONS = 5;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [counter, setCounter] = useState(0);
  const seconds = String(counter % 60).padStart(2, "0");
  const minutes = String(Math.floor(counter / 60)).padStart(2);
  const history = useHistory();
  const startTriviaAPI = async () => {
    setLoading(true);
    setScore(0);
    setNumber(0);

    const questionApi = await fetchQuizQuestion();

    setGameStart(false);
    setGameOver(false);
    setQuestions(questionApi);
    setCounter(180);
    setLoading(false);
    setUserAnswers([]);
  };

  const checkAnswer = (e?: React.MouseEvent<HTMLButtonElement>) => {
    let answerFromUser;
    if (e?.currentTarget.value) {
      answerFromUser = e.currentTarget.value;
    }

    if (answerFromUser === questions[number].correct_answer) {
      setScore((prevState) => prevState + 1);
    }

    const userAnswersObject = {
      question: questions[number].question,
      answer: answerFromUser,
      correctAnswer: questions[number].correct_answer,
      correct: true,
    };

    setUserAnswers((prevState) => [...prevState, userAnswersObject]);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setCounter(0);
      setGameOver(true);
    } else {
      setCounter(180);
      setNumber(nextQuestion);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    if (counter === 0 && !gameStart) {
      checkAnswer();
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    }
    if (counter < -2 && !gameOver && !gameStart) {
      setCounter(180);
    }
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, gameStart, gameOver]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz App</h1>
        {gameStart && (
          <button className="start" onClick={startTriviaAPI}>
            Come??ar o quiz
          </button>
        )}

        {!gameStart && !gameOver && <p className="score">Pontua????o: {score}</p>}
        {!gameStart && !loading && counter > 0 && (
          <p className="score">
            Tempo restantes: {minutes}:{seconds}
          </p>
        )}
        {loading && <p>Carregando perguntas...</p>}

        {!loading && !gameStart && !gameOver && (
          <QuestionCard
            totalQuestion={TOTAL_QUESTIONS}
            questionNumber={number + 1}
            question={questions[number]?.question}
            answers={questions[number]?.answers}
            userAnswers={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameStart &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Pr??xima quest??o
            </button>
          )}

        {!gameStart &&
          !gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number === TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Finalizar o quiz
            </button>
          )}

        {!gameStart && gameOver && !loading && (
          <GenericWrapper>
            <h1>{score > 2 ? "Parab??ns!" : "Que pena!"}</h1>
            <p>Voc?? terminou o quiz!</p>
            <p>Sua pontua????o foi: {score} acertos</p>
            <button className="start" onClick={() => window.location.reload()}>
              Voltar para o in??cio
            </button>
          </GenericWrapper>
        )}
        <button className="start" onClick={() => history.push("/admin")}>
          Editar quiz
        </button>
      </Wrapper>
    </>
  );
}

export default Index;
