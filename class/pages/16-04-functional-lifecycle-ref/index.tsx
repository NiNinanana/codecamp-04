import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MyLifeCyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  // componentDidMount와 동일, 그냥 실행됨
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();
    // return 을 넣으면 componentWillUnmount와 동일
    return () => {
      console.log("잘가요");
    };
  }, []); // [] : 의존성 배열(dependency array), 배열에 의존하고 있다.
  // useEffect(() => {}, [count]); // count가 바뀔 때 마다 다시 실행됨
  // useEffect(() => {}, [count, aaa]); // count 또는 aaa가 바뀔 때 마다 다시 실행됨
  // 배열이 없을때는 뭐하나라도 바뀌면 다시 실행 => componenetDidUpdate와 비슷, 최초 첫 한번은 무조건 실행됨.
  useEffect(() => {
    console.log("수정됨");
  });

  const onClickCounter = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push(`/`);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>페이지 이동하기!!!</button>
    </>
  );
}
