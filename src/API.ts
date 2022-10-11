import { shuffleArray } from "./utils";
export type Questions = {
  category: string;
  correct_answer: string;
  difficultly: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
// add answers type to contact correct answer with incorrect answer in the same array
export type QuestionState = Questions & { answers: string[] };

export enum Difficultly {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
//fetch the quiz questions from trivia api
export const fetchQuizQueston = async (
  amount: number,
  difficultly: Difficultly
) => {
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
