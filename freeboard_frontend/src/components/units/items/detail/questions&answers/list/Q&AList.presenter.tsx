import Answers from "./answer/Answers.container";
import AnswerWrite from "./write/AnswerWrite.container";

export default function QNAListUI(props) {
  return (
    <>
      <div>질문</div>
      {props.questionsData?.fetchUseditemQuestions.map((el) => (
        <div key={el._id}>
          <div>{el.contents}</div>
          <div>
            {/* {props.isAnswerView && ( */}
            <>
              {/* {props.answersData?.fetchUseditemQuestionAnswers?.[0]?.contents} */}
              <Answers questionId={el._id} />
            </>
            {/* )} */}
          </div>
          {!props.isAnswer && (
            <button onClick={props.onClickOpen} id={el._id}>
              답변달기
            </button>
          )}
          {props.isAnswer && (
            <button onClick={props.onClickClose} id={el._id}>
              닫기
            </button>
          )}

          {props.isAnswer && <AnswerWrite questionId={el._id} />}
        </div>
      ))}
    </>
  );
}
