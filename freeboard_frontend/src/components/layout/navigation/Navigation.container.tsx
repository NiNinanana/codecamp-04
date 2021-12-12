import { useRouter } from "next/router";
import { useState, MouseEvent, useEffect, useContext } from "react";
import NavigationUI from "./Navigation.presenter";
import { GlobalContext } from "../../../../pages/_app";

export default function Navigation() {
  const router = useRouter();
  const { accessToken, setAccessToken } = useContext(GlobalContext);
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
    router.push(`/items/list`);
  }

  function onClickMyPage(event: MouseEvent<HTMLAnchorElement, MouseEvent>) {
    // if (!accessToken) {
    //   alert("로그인 고고");
    //   router.push(`/signIn`);
    //   return;
    // }
    toggle();
    setIsMyPage(true);
    // event.preventDefault();
    console.log("Asdfasdfasdf");
    router.push(`/myPage`);
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

  function onClickLogout() {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    alert("로그아웃");
    router.push(`/boards/list`);
  }
  let location = "";

  useEffect(() => {
    location = window.location.href;
    console.log("현재 페이지!!!", location);
    console.log("현재 페이지!!!", String(location).includes("boards/list"));
  }, []);

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
      clickLogout={onClickLogout}
      location={location}
    />
  );
}
