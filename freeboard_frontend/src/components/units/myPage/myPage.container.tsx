import { useRouter } from "next/router";
import MyPageUI from "./myPage.presenter";

export default function MyPage() {
  const router = useRouter();
  const onClickPlus = () => {
    router.push(`/myPage/plus`);
  };

  const onClickDetail = (el) => () => {
    router.push(`/items/${el._id}`);
  };

  return <MyPageUI plus={onClickPlus} detailItem={onClickDetail} />;
}
