import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다");
  let countLet = 0;
  const [countState, setCountState] = useState(0);
  // hooks는 새로 렌더링 되어도 값이 새로 바뀌진 안흔다

  const randomValue = useMemo(() => Math.random(), []);
  console.log(randomValue);

  const onClickCountLet = useCallback(() => {
    countLet++;
    console.log(countLet);
  }, []);

  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
    // console.log(countState);
  }, []);

  return (
    <>
      <div>================</div>
      <div>이것은 컨테이너 입니다</div>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>
      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
      <div>================</div>
      <MemoizationPresenterPage countState={countState} />
    </>
  );
}
