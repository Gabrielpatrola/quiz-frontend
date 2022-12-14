import axios from "axios";
import { shuffleArray } from "../utils";

export type Questions = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Questions & { answers: string[] };

export type QuestionInfo = Questions & { id: number };

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

export const CreateQuizQuestion = async (data: Questions) => {
  await api.post(`api/questions`, { ...data });
};

export const UpdateQuizQuestion = async (id: string | number, data: Questions) => {
  const result = await api.put(`api/questions/${id}`, { ...data });

  return result;
};

export const DeleteQuizQuestion = async (id: number) => {
  return await api.delete(`api/questions/${id}`);
};
