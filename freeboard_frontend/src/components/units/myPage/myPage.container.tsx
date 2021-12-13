import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import MyPageUI from "./myPage.presenter";
import { FETCH_USED_ITEMS_I_SOLD } from "./myPage.queries";

export default function MyPage() {
  const router = useRouter();
  const onClickPlus = () => {
    router.push(`/myPage/plus`);
  };

  const onClickDetail = (el: any) => () => {
    router.push(`/items/${el._id}`);
  };

  const { data: soldItemData } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USED_ITEMS_I_SOLD);

  return (
    <MyPageUI
      plus={onClickPlus}
      detailItem={onClickDetail}
      soldData={soldItemData}
    />
  );
}
