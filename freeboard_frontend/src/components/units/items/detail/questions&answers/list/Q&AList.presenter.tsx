export default function QNAListUI(props) {
  return (
    <>
      <div>질문</div>
      {props.questionsData?.fetchUseditemQuestions.map((el) => (
        <div key={el._id}>
          <div onClick={props.onClickQuestion} id={el._id}>
            {el.contents}
          </div>
          <div>
            {props.answersData?.fetchUseditemQuestionAnswers?.[0]?.contents}
          </div>
          {props.isAnswer && (
            <>
              <input type="text" onChange={props.onChangeAnswer} />
              <button onClick={props.onClickAnswer}>답변달기</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}
