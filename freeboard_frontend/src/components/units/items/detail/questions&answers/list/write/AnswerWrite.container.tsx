import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "../Q&AList.queries";

export default function AnswerWrite(props) {
  const [answer, setAnswer] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const onChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const onClickAnswer = async () => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.questionId,
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
    <>
      {/* <button onClick={onClickOpen}>답변달기</button> */}
      <input type="text" onChange={onChangeAnswer} />
      <button onClick={onClickAnswer}>답변달기</button>
    </>
  );
}
