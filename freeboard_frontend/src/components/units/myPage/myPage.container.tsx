import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import { TOGGLE_USED_ITEM_PICK } from "../items/detail/DetailItem.queries";
import MyPageUI from "./myPage.presenter";
import {
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_I_SOLD,
} from "./myPage.queries";

export default function MyPage() {
  const router = useRouter();

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

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

  const onClickUnPickItem = (el) => async () => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: el._id,
        },
      });
      console.log(result);
      alert("찜 목록에서 없앴습니다!");
      router.reload();
    } catch (error) {
      alert("실패ㅜㅜㅜㅜㅜ");
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MyPageUI
      plus={onClickPlus}
      detailItem={onClickDetail}
      soldData={soldItemData}
      pickData={pickData}
      unPickItem={onClickUnPickItem}
    />
  );
}
