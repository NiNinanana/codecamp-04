import BoardsListUI from "./BoardsList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARDS_SEARCH,
} from "./BoardsList.queries";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_BOARD } from "./BoardsList.mutations";
import { useRouter } from "next/router";
import { IBoardsListProps } from "./BoardsList.types";
import { useState } from "react";

export default function BoardsList(props: IBoardsListProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      page: page,
    },
  });
  const { data: data2 } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: data3 } = useQuery(FETCH_BOARDS_SEARCH, {
    variables: {
      search: search,
    },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [isList, setIsList] = useState(true);
  const router = useRouter();

  const create: any = String(data?.fetchBoards.createdAt);

  async function onClickDelete(event: any) {
    try {
      await deleteBoard({
        variables: { boardId: event.target.id },
        refetchQueries: [{ query: FETCH_BOARDS }],
        // refetchQueries: [{ query: FETCH_BOARDS_OF_THE_BEST }] // 새로고침격 , variables가 잇다면 이런식으로 뒤에 더 붙여야함 {variables: {id: 123}}
      });
    } catch (error) {
      alert("error.message");
    }
  }

  async function onClickBestDelete(event: any) {
    try {
      await deleteBoard({
        variables: { boardId: event.target.id },
        refetchQueries: [{ query: FETCH_BOARDS_OF_THE_BEST }], // 새로고침격 , variables가 잇다면 이런식으로 뒤에 더 붙여야함 {variables: {id: 123}}
      });
    } catch (error) {
      alert("error.message");
    }
  }

  function onClickBestContents(event: any) {
    // router.push(`/boards/${data2?.fetchBoardsOfTheBest[0]._id}`)
    router.push(`/boards/${event.currentTarget.id}`);
  }

  function onClickJustContents(event: any) {
    router.push(`/boards/${event.currentTarget.id}`);
  }

  function onClickWrite() {
    router.push(`/boards/new`);
  }

  function onClickSearch() {
    // alert("페이지 공사중입니다");
    setIsList(false);
    try {
    } catch (error) {
      // alert(error.message)
    }
  }

  function onClickMain() {
    location.reload();
  }

  function onChangeSearchBox(event) {
    setIsList(true);
    setSearch(event.target.value);
  }

  console.log(search);

  function onClickList1() {
    setPage(1);
  }
  function onClickList2() {
    setPage(2);
  }
  function onClickList3() {
    setPage(3);
  }
  function onClickList4() {
    setPage(4);
  }
  function onClickList5() {
    setPage(5);
  }

  return (
    <>
      <BoardsListUI
        data={data}
        data2={data2}
        data3={data3}
        write={onClickWrite}
        delete={onClickDelete}
        deleteBest={onClickBestDelete}
        create={create}
        bestContents={onClickBestContents}
        justContents={onClickJustContents}
        search={onClickSearch}
        isList={isList}
        main={onClickMain}
        searchBox={onChangeSearchBox}
        list1={onClickList1}
        list2={onClickList2}
        list3={onClickList3}
        list4={onClickList4}
        list5={onClickList5}
        onClickSearch={onClickSearch}
      />
    </>
  );
}
