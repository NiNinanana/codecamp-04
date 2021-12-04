import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ListItemUI from "./listItem.presenter";
import { FETCH_USED_ITEMS } from "./listItem.queries";

export default function ListItem() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });
  console.log("data", data?.fetchUseditems);
  const onClickDetail = (event) => {
    router.push(`/items/${event.target.id}`);
  };

  const onClickCreate = () => {
    router.push(`/items/create`);
  };

  return (
    <ListItemUI
      data={data}
      onClickDetail={onClickDetail}
      create={onClickCreate}
    />
  );
}
