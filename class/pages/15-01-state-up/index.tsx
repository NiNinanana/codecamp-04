import Child1 from "../../src/components/units/stateup/child1";
import Child2 from "../../src/components/units/stateup/child2";
import { useState } from "react";

export default function StateUpPage() {
  const [count, setCount] = useState(0);
  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Child1 count={count} onClickCounter={onClickCounter} />
      <div>===========================</div>
      <Child2 count={count} onClickCounter={onClickCounter} />
      {/* <button onClick={onClickCounter}>카운트 올리기</button> */}
    </>
  );
}
