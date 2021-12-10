import { useMutation, useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import { IBoard, IUseditem } from "../../../../commons/types/generated/types";
import DetailItemUI from "./DetailItem.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./DetailItem.queries";

export default function DetailItem() {
  const router = useRouter();
  const [deleteUsedItem] = useMutation(DELETE_USED_ITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

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

  const onClickBasket = () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    let isExists = false;

    baskets.forEach((basketEl: IUseditem) => {
      if (data.fetchUseditem._id === basketEl._id) isExists = true;
    });

    if (isExists) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }

    baskets.push(data.fetchUseditem);

    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  const onClickBuy = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.myId,
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <DetailItemUI
      name={data?.fetchUseditem?.name}
      remarks={data?.fetchUseditem?.remarks}
      contents={data?.fetchUseditem?.contents}
      price={data?.fetchUseditem?.price}
      image={data?.fetchUseditem?.images}
      createdAt={data?.fetchUseditem?.createdAt}
      seller={data?.fetchUseditem?.seller}
      address={data?.fetchUseditem?.useditemAddress?.address}
      update={onClickUpdate}
      list={onClickList}
      delete={onClickDelete}
      basket={onClickBasket}
      buy={onClickBuy}
    />
  );
}
