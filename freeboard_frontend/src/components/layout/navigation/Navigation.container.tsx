import { useRouter } from "next/router";
import { useState, MouseEvent, useEffect } from "react";
import NavigationUI from "./Navigation.presenter";
import { gql, useMutation } from "@apollo/client";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function Navigation() {
  const router = useRouter();
  const [isFree, setIsFree] = useState(true);
  const [isCarrot, setIsCarrot] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);
  const [isCat, setIsCat] = useState(false);

  const [logoutUser] = useMutation(LOGOUT_USER);
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

  const onClickLogout = async () => {
    // setAccessToken(null);
    try {
      await logoutUser();
      localStorage.removeItem("refreshToken");
      alert("로그아웃");
      // router.push(`/boards/list`);
      router.reload();
    } catch (error) {
      alert("error");
      if (error instanceof Error) console.log(error.message);
    }
  };
  let location = "";

  useEffect(() => {
    location = window.location.href;
    // console.log("현재 페이지!!!", location);
    // console.log("현재 페이지!!!", String(location).includes("boards/list"));
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
