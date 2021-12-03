import { useQuery } from "@apollo/client";
import router from "next/router";
import DetailItemUI from "./DetailItem.presenter";
import { FETCH_USED_ITEM } from "./DetailItem.queries";

export default function DetailItem() {
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  console.log("asdf", data?.fetchUseditem);

  return (
    <DetailItemUI
      name={data?.fetchUseditem?.name}
      remarks={data?.fetchUseditem?.remarks}
      contents={data?.fetchUseditem?.contents}
      price={data?.fetchUseditem?.price}
    />
  );
}
