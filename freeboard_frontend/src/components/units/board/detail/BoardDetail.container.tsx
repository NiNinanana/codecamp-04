import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { DELETE_BOARD, DISLIKEBOARD, LIKEBOARD } from "./BoardDetail.mutations";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD,
  FETCH_BOARD_COMMENTS,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.myId,
    },
  });
  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.myId,
      page: 1,
    },
  });
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKEBOARD);
  const [dislikeBoard] = useMutation(DISLIKEBOARD);

  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");

  const like: number = data?.fetchBoard.likeCount;
  const dislike: number = data?.fetchBoard.dislikeCount;

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { boardId: data?.fetchBoard._id },
        // refetchQueries: [{query: FETCH_BOARD, variables: {_id: data?.fetchBoard._id}}]
      });
      alert("삭제되었습니다.");
      router.push(`/boards/list`);
    } catch (error) {
      alert("error");
    }
  }

  async function onClickDeleteComment(event: any) {
    const passwordPrompt = prompt("비밀번호를 입력해주세요");

    try {
      await deleteBoardComment({
        variables: {
          password: passwordPrompt,
          //   boardCommentId: commentData?.fetchBoardComment._id,
          boardCommentId: event.target.id,
        },
        // refetchQueries: [{query: FETCH_BOARD, variables: {_id: data?.fetchBoard._id}}]
      });
      alert("삭제되었습니다.");
      router.push(`/boards/${router.query.myId}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickLike() {
    try {
      await likeBoard({
        variables: { boardId: data?.fetchBoard._id },
        // refetchQueries: [{ query: FETCH_BOARD }],
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: data?.fetchBoard._id } },
        ],
      });
    } catch (error) {
      alert("error");
    }
  }

  async function onClickDislike() {
    try {
      await dislikeBoard({
        variables: { boardId: data?.fetchBoard._id },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: data?.fetchBoard._id } },
        ],
        // refetchQueries: [{query: FETCH_BOARD, variables: {_id: data?.fetchBoard._id}}]
      });
    } catch (error) {
      alert("error");
    }
  }

  function onClickList() {
    router.push(`/boards/list`);
  }

  function previous() {
    // 이전글 버튼 눌렀을 때
    router.push(`/boards/61886ea95d30bc002aa079db`);
  }

  async function next() {
    // 다음글 버튼 눌렀을 때
    router.push(`/boards/61869a985d30bc002aa079aa`);
  }

  async function onClickUpdate() {
    router.push(`/boards/${router.query.myId}/edit`);
  }

  let fff: boolean;

  if (data?.fetchBoard.youtubeUrl?.includes("youtube.com")) {
    fff = true;
  } else {
    fff = false;
  }

  // 비디오에 값이 없을 때 딸기달 뜨게 하기

  function onChangeCommentWriter(event: any) {
    setWriter(event.target.value);
  }
  function onChangeCommentContents(event: any) {
    setContents(event.target.value);
  }
  function onChangeCommentPassword(event: any) {
    setPassword(event.target.value);
  }

  async function onClickCreateComment() {
    console.log(writer);
    console.log(password);
    console.log(contents);
    console.log(data?.fetchBoard._id);
    if (!writer || !password || !contents) {
      alert("다시 확인해주세요.");
      //   return;
    }
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: 1,
          },
          boardId: router.query.myId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.myId },
          },
        ],
      });
      alert("등록되었습니다.");
      // location.reload(); // 페이지 리로드
    } catch (error) {
      alert(error.message);
    }
  }
  console.log(data?.fetchBoard);

  function onClickUpdateComment() {}

  return (
    <>
      <BoardDetailUI
        dataTitle={data?.fetchBoard.title}
        dataWriter={data?.fetchBoard.writer}
        dataContents={data?.fetchBoard.contents}
        dataId={data?.fetchBoard._id}
        dataYoutube={data?.fetchBoard.youtubeUrl}
        dataAddress={data?.fetchBoard.boardAddress}
        fff={fff}
        // commentDataWriter={commentData?.fetchBoardComments[0].writer}
        // commentDataContents={commentData?.fetchBoardComments[0].contents}
        commentData={commentData}
        // 여기서 data = {data}까지만 하고 presenter에서 {props.data?.fetchBoard.title}]해서 할 수 있다.
        create={data?.fetchBoard.createdAt}
        like={like}
        dislike={dislike}
        previous={previous}
        next={next}
        delete={onClickDelete}
        likeCount={onClickLike}
        dislikeCount={onClickDislike}
        list={onClickList}
        update={onClickUpdate}
        deleteComment={onClickDeleteComment}
        createComment={onClickCreateComment}
        commentWriter={onChangeCommentWriter}
        commentContents={onChangeCommentContents}
        commentPassword={onChangeCommentPassword}
        ddd={0}
        updateComment={onClickUpdateComment}
      />
    </>
  );
}
