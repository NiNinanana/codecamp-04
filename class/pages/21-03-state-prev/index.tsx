import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // setCount((prev) => prev + 1); => 콜백함수
    // setCount(function (prev) {
    //   return prev + 1;
    // });
    setCount((abc) => abc + 1);
  };

  return (
    <>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCount}> + </button>
    </>
  );
}
