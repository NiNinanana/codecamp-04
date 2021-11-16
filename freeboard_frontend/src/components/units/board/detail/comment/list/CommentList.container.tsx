import CommentListUIItem from "./CommentList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "../../BoardDetail.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentListUI from "./CommentList.presenterMap";
import { Modal } from "antd";

export default function CommentList() {
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.myId,
      page: 1,
    },
  });

  function onChangePassword(event) {
    setPassword(event.target.value); // password에는 들억나느데 새로 실행이 됨
    console.log(event.target.value);
  }

  async function onClickDeleteComment(event: any) {
    // const passwordPrompt = prompt("비밀번호를 입력해주세요");

    try {
      await deleteBoardComment({
        variables: {
          password: password,
          //   boardCommentId: commentData?.fetchBoardComment._id,
          boardCommentId: "?",
        },
        // refetchQueries: [{query: FETCH_BOARD, variables: {_id: data?.fetchBoard._id}}]
      });
      alert("삭제되었습니다.");
      router.push(`/boards/${router.query.myId}`);
    } catch (error) {
      alert(error.message);
    }
  }
  console.log(commentData);

  return (
    <>
      <CommentListUI
        commentData={commentData}
        deleteComment={onClickDeleteComment}
        isEdit={isEdit}
        setPassword={setPassword}
        onChangePassword={onChangePassword}
      />
    </>
  );
}
