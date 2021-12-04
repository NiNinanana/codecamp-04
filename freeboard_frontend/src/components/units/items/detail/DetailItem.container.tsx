import { useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import DetailItemUI from "./DetailItem.presenter";
import { FETCH_USED_ITEM } from "./DetailItem.queries";

export default function DetailItem() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  console.log("asdf", data?.fetchUseditem);

  const onClickUpdate = () => {
    router.push(`/items/${router.query.myId}/edit`);
  };
  const onClickList = () => {
    router.push(`/items/list`);
  };
  return (
    <DetailItemUI
      name={data?.fetchUseditem?.name}
      remarks={data?.fetchUseditem?.remarks}
      contents={data?.fetchUseditem?.contents}
      price={data?.fetchUseditem?.price}
      update={onClickUpdate}
      list={onClickList}
    />
  );
}
