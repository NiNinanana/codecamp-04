import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import ListItemUI from "./listItem.presenter";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_SEARCH } from "./listItem.queries";
import { IListItemProps } from "./listItem.types";

declare const window: typeof globalThis & {
  event: any;
};

export default function ListItem(props: IListItemProps) {
  const router = useRouter();
  const [searchItems, setSearchItem] = useState("");
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: searchData, fetchMore: searchFetchMore } = useQuery(
    FETCH_USED_ITEMS_SEARCH,
    {
      variables: {
        search: router.query.search,
        page: 1,
      },
    }
  );
  const onClickDetail = (el: any) => (event: MouseEvent<HTMLSpanElement>) => {
    router.push(`/items/${event.target.id}`);
  };

  const onClickCreate = () => {
    router.push(`/items/create`);
  };

  const onChangeSearchContents = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  const onClickSearch = () => {
    router.push(`/items/list/${searchItems}`);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  const onLoadMoreSearch = () => {
    if (!searchData) return;

    searchFetchMore({
      variables: {
        page: Math.ceil(searchData?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickList = () => {
    router.push(`/items/list`);
  };

  const onClickBasket = () => {
    router.push(`/items/basket`);
  };

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      onClickSearch();
    }
  };
  return (
    <ListItemUI
      data={data}
      searchData={searchData}
      onClickDetail={onClickDetail}
      create={onClickCreate}
      searchContents={onChangeSearchContents}
      search={onClickSearch}
      onLoadMore={onLoadMore}
      onLoadMoreSearch={onLoadMoreSearch}
      list={onClickList}
      basket={onClickBasket}
      enterKey={enterKey}
      isSearch={props.isSearch}
    />
  );
}
