export default function QNAListUI(props) {
  return (
    <>
      <div>질문</div>
      {props.questionsData?.fetchUseditemQuestions.map((el) => (
        <div key={el._id}>
          <div>{el.contents}</div>
        </div>
      ))}
    </>
  );
}
