import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import QNAListUI from "./Q&AList.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
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
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: itemData } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  const onClickOpen = (event: MouseEvent<HTMLSpanElement>) => {
    setQuestionId(event.target.id);
    setIsAnswer(true);
    setIsAnswerView(true);
  };

  const onClickClose = () => {
    setIsAnswer(false);
    setIsAnswerView(false);
  };

  const onChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
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
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <QNAListUI
      questionsData={questionsData}
      userData={userData}
      itemData={itemData}
      isAnswer={isAnswer}
      isAnswerView={isAnswerView}
      onClickOpen={onClickOpen}
      onClickClose={onClickClose}
      onChangeAnswer={onChangeAnswer}
      onClickAnswer={onClickAnswer}
    />
  );
}
