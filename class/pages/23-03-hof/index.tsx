export default function HofPage() {
  const onClickChild = (index) => (event) => {
    console.log(event.target.id);
    console.log(index);
  };
  // onClickChild(index)(event)
  return (
    <>
      <h1>HOF 연습!!!!!!!!!!</h1>
      <div>
        {["철수", "영희", "훈이"].map((el, index) => (
          <div key={el} id={el} onClick={onClickChild(index)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}
