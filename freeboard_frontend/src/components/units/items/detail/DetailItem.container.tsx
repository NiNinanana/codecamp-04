import { useMutation, useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import DetailItemUI from "./DetailItem.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./DetailItem.queries";

export default function DetailItem() {
  const router = useRouter();
  const [deleteUsedItem] = useMutation(DELETE_USED_ITEM);
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

  const onClickDelete = async () => {
    try {
      await deleteUsedItem({
        variables: { useditemId: router.query.myId },
      });
      alert("삭제되었습니다.");
      router.push(`/items/list`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  console.log("images!!!!", data?.fetchUseditem?.images[0]);
  return (
    <DetailItemUI
      name={data?.fetchUseditem?.name}
      remarks={data?.fetchUseditem?.remarks}
      contents={data?.fetchUseditem?.contents}
      price={data?.fetchUseditem?.price}
      image={data?.fetchUseditem?.images}
      createdAt={data?.fetchUseditem?.createdAt}
      seller={data?.fetchUseditem?.seller}
      update={onClickUpdate}
      list={onClickList}
      delete={onClickDelete}
    />
  );
}
