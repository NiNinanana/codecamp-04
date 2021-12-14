import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import MyPageUI from "./myPage.presenter";
import {
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_I_SOLD,
} from "./myPage.queries";

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

  const { data: pickData } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  console.log("나리 <3", pickData?.fetchUseditemsIPicked);

  return (
    <MyPageUI
      plus={onClickPlus}
      detailItem={onClickDetail}
      soldData={soldItemData}
      pickData={pickData}
    />
  );
}
