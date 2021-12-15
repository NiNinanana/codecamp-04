import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import QNAListUI from "./Q&AList.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./Q&AList.queries";

export default function QNALIST() {
  const router = useRouter();
  const [questionId, setQuestionId] = useState("");
  const [answer, setAnswer] = useState("");
  const [isAnswer, setIsAnswer] = useState(false);
  const [isAnswerView, setIsAnswerView] = useState(false);

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const { data: questionsData } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  const onClickOpen = (event) => {
    setQuestionId(event.target.id);
    setIsAnswer(true);
    setIsAnswerView(true);
  };

  const onClickClose = () => {
    setIsAnswer(false);
    setIsAnswerView(false);
  };

  const onChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const onClickAnswer = async () => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: questionId,
          createUseditemQuestionAnswerInput: {
            contents: answer,
          },
        },
      });
      alert("성공!!!!");
      console.log(result.data);
    } catch (error) {
      alert("실패ㅜㅜㅜㅜㅜㅜ");
      console.log(error.message);
    }
  };

  return (
    <QNAListUI
      questionsData={questionsData}
      onClickOpen={onClickOpen}
      onClickClose={onClickClose}
      isAnswer={isAnswer}
      onChangeAnswer={onChangeAnswer}
      onClickAnswer={onClickAnswer}
      isAnswerView={isAnswerView}
    />
  );
}
