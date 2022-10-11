import axios from "axios";
import { shuffleArray } from "../utils";

export type Questions = {
  category: string;
  correct_answer: string;
  difficultly: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Questions & { answers: string[] };

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const fetchQuizQuestion = async () => {
  const result = await api.get("api/questions");

  const normalizeResponse = result.data.map((question: Questions) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));

  return shuffleArray(normalizeResponse);
};

export const CreateQuizQuestion = async (id: number) => {
  const result = await api.post(`api/questions/${id}`);

  const normalizeResponse = result.data.map((question: Questions) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));

  return shuffleArray(normalizeResponse);
};

export const UpdateQuizQuestion = async (id: number, data: Questions) => {
  const result = await api.post(`api/questions/${id}`, { data });

  return result;
};

export const DeleteQuizQuestion = async (id: number) => {
  return await api.delete(`api/questions/${id}`);
};
