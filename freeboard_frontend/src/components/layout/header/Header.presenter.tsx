import { useRouter } from "next/router";
import { Header, GithubImg } from "./Header.styles";

export default function HeaderUI() {
  const router = useRouter();

  const onClickImg = () => {
    router.push(`/boards/list`);
  };

  return (
    <>
      <Header>
        <GithubImg onClick={onClickImg} src="/images/고앵이.gif"></GithubImg>
      </Header>
    </>
  );
}
