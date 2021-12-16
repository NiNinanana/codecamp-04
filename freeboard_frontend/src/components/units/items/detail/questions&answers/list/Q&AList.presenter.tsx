import Answers from "./answer/Answers.container";
import { IQNAListUIProps } from "./Q&AList.types";
import AnswerWrite from "./write/AnswerWrite.container";
import * as S from "./Q&AList.styles";

export default function QNAListUI(props: IQNAListUIProps) {
  return (
    <>
      <S.QuestionTest>상품 Q&A</S.QuestionTest>
      {props.questionsData?.fetchUseditemQuestions.map((el: any) => (
        <div key={el._id}>
          <S.QNAContents>
            <S.QuestionContents>Q. {el.contents}</S.QuestionContents>
            {/* {props.isAnswerView && ( */}
            <S.AnswerContents>
              {/* {props.answersData?.fetchUseditemQuestionAnswers?.[0]?.contents} */}
              <Answers questionId={el._id} />
            </S.AnswerContents>
            {/* )} */}
          </S.QNAContents>
          {props.userData?.fetchUserLoggedIn.email ===
            props.itemData?.fetchUseditem.seller.email && (
            <>
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
            </>
          )}

          {props.isAnswer && <AnswerWrite questionId={el._id} />}
        </div>
      ))}
    </>
  );
}
