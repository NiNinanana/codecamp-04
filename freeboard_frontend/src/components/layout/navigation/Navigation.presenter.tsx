import { useRouter } from "next/router";
import { Navigation, ListButton } from "./Navigation.styles";

export default function NavigationUI() {
  const router = useRouter();
  function onClickList() {
    router.push(`/boards/list`);
    alert("asdf");
  }
  return (
    <>
      <Navigation>
        <ListButton onClick={onClickList}>게시글 목록</ListButton>
        <div>네비네비</div>
      </Navigation>
    </>
  );
}
