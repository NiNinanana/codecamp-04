import { useRouter } from "next/router";
import NavigationUI from "./Navigation.presenter";

export default function Navigation() {
  const router = useRouter();

  function onClickFreeBoard(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    router.push(`/boards/list`);
  }
  function onClickCarrot(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    alert("공사중입니다.");
    // router.push(`/boards/list`);
  }
  function onClickMyPage(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    alert("공사중입니다");
    // router.push(`/boards/list`);
  }

  return (
    <NavigationUI
      clickFree={onClickFreeBoard}
      clickCarrot={onClickCarrot}
      clickMyPage={onClickMyPage}
    />
  );
}
