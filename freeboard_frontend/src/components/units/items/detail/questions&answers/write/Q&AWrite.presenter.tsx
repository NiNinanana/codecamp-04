export default function QNAWriteUI(props) {
  return (
    <>
      <div>bbbbbbb</div>
      <input
        type="text"
        onChange={props.myQuestion}
        onFocus={props.focusInput}
      />
      <button onClick={props.submit}>등록하기</button>
    </>
  );
}
