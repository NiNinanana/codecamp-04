import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../Q&AList.queries";

export default function Answers(props) {
  const { data: answersData } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.questionId,
    },
  });
  return (
    <>
      <div>A. {answersData?.fetchUseditemQuestionAnswers?.[0]?.contents}</div>
    </>
  );
}
