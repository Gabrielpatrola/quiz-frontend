import { shuffleArray } from "./utils";

export type Questions = {
  category: string;
  correct_answer: string;
  difficultly: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Questions & { answers: string[] };

export const fetchQuizQueston = async () => {
  const endpoint = `${process.env.REACT_APP_API_URL}/api/questions`;
  const data = await (await fetch(endpoint)).json();
  return data.map((question: Questions) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
