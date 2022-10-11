import React from "react";
import { UserAnswer } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type QuestionCardProps = {
  question: string;
  answers: string[];
  userAnswers: UserAnswer | undefined;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  questionNumber: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  userAnswers,
  callback,
  questionNumber,
  totalQuestion,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Questão: {questionNumber} de {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers?.map((answer) => (
          <ButtonWrapper
            correct={userAnswers?.correctAnswer === answer}
            userClicked={userAnswers?.answer === answer}
            key={answer}
          >
            <button
              disabled={userAnswers ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
