import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import QNAWriteUI from "./Q&AWrite.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./Q&AWrite.queries";

export default function QNAWrite() {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const onChangeMyQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const onClickSubmit = async () => {
    console.log(question);
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.myId),
          createUseditemQuestionInput: {
            contents: question,
          },
        },
      });
      alert("성공");
      console.log(result.data);
    } catch (error) {
      alert("실패");
      console.log(error);
    }
  };

  return <QNAWriteUI myQuestion={onChangeMyQuestion} submit={onClickSubmit} />;
}
