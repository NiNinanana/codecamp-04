import { useEffect, useState } from "react";

export default function UseEffectDependencyArrayPage() {
  console.log("랜더링시작");
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("최초한번 실행!!!!!!");
  // }, []);

  // useEffect(() => {
  //   console.log("count 변경 실행!!!!!!");
  // }, [count]); // 최초1회 실행 및 카운트가 변경되면 실행

  // useEffect(() => {
  //   setCount(100);
  // }, []); // setState로 바꿔주면 다시 새롭게 그려지기에 "랜더링시작"이 두번나오게 된다. 이왕이면 useEffect에 setState를 넣지 말자

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]); // 계속해서 새롭게 그려지기에 끝없이 count가 커지게 된다.

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
    </>
  );
}
