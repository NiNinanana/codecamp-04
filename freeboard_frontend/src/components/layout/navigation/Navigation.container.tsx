import { useRouter } from "next/router";
import { useState, MouseEvent, useEffect } from "react";
import NavigationUI from "./Navigation.presenter";

export default function Navigation() {
  const router = useRouter();
  const [isFree, setIsFree] = useState(true);
  const [isCarrot, setIsCarrot] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);
  const [isCat, setIsCat] = useState(false);

  useEffect(() => {
    console.log(router.query);
  }, []);

  function toggle() {
    setIsFree((prev) => false);
    setIsCarrot((prev) => false);
    setIsMyPage((prev) => false);
    setIsCat((prev) => false);
  }

  function onClickFreeBoard(event: MouseEvent<HTMLAnchorElement, MouseEvent>) {
    toggle();
    setIsFree(true);
    event.preventDefault();
    router.push(`/boards/list`);
  }

  function onClickCarrot(event: MouseEvent<HTMLAnchorElement, MouseEvent>) {
    toggle();
    setIsCarrot(true);
    event.preventDefault();
    alert("공사중입니다.");
    // router.push(`/boards/list`);
  }

  function onClickMyPage(event: MouseEvent<HTMLAnchorElement, MouseEvent>) {
    toggle();
    setIsMyPage(true);
    event.preventDefault();
    alert("공사중입니다");
    // router.push(`/boards/list`);
  }

  function onClickCat() {
    toggle();
    setIsCat(true);
    router.push(`/cats`);
  }

  function onClickLogin() {
    toggle();
    router.push(`/signIn`);
  }

  return (
    <NavigationUI
      isFree={isFree}
      isCarrot={isCarrot}
      isMyPage={isMyPage}
      isCat={isCat}
      clickFree={onClickFreeBoard}
      clickCarrot={onClickCarrot}
      clickMyPage={onClickMyPage}
      clickCat={onClickCat}
      clickLogin={onClickLogin}
    />
  );
}
