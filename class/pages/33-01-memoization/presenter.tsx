import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 됩니다");
  return (
    <>
      <div>================</div>
      <div>이것은 프리젠터 입니다</div>
      <div>================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);

// memo를 해놨어도 props해서 넘기게되면 프리젠터가 렌더링이 된다.
