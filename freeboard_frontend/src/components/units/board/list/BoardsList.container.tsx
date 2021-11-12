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

export default function BoardsList(props: IBoardsListProps) {
  const { data } = useQuery(FETCH_BOARDS);
  const { data: data2 } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: data3 } = useQuery(FETCH_BOARDS_SEARCH);

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const router = useRouter();

  let create: any = String(data?.fetchBoards.createdAt);
  create = create.split("T").join("").split("");
  console.log(create);
  let createA = create.slice(0, 10).join("");
  let createB = create.slice(10, 15).join("");
  create = createA + " / " + createB + "(GMT)";

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
    // alert("페이지 공사중입니다")
    // try{
    //     await
    // }catch(error){
    //     // alert(error.message)
    // }
  }

  console.log(data);

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
        isList={props.isList}
      />
    </>
  );
}
