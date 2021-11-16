import CommentListUIItem from "./CommentList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "../../BoardDetail.queries";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { DELETE_BOARD_COMMENT } from "../../BoardDetail.queries";
import { useState } from "react";

export default function CommentListUI(props) {
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.myId,
      page: 1,
    },
  });

  async function onClickDeleteComment(event: any) {
    // const passwordPrompt = prompt("비밀번호를 입력해주세요");

    try {
      await deleteBoardComment({
        variables: {
          password: password,
          //   boardCommentId: commentData?.fetchBoardComment._id,
          boardCommentId: el?._id,
        },
        // refetchQueries: [{query: FETCH_BOARD, variables: {_id: data?.fetchBoard._id}}]
      });
      alert("삭제되었습니다.");
      router.push(`/boards/${router.query.myId}`);
    } catch (error) {
      alert(error.message);
    }
  }

  const ABC = styled.div`
    padding-bottom: 48px;
  `;
  return (
    <>
      <ABC>
        {commentData?.fetchBoardComments.map((el: any) => (
          <CommentListUIItem
            commentData={props.commentData}
            updateComment={props.updateComment}
            deleteComment={onClickDeleteComment}
            isEdit={props.isEdit}
            key={el._id}
            el={el}
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            setPassword={setPassword}
            onChangePassword={props.onChangePassword}
          />
        ))}
      </ABC>
    </>
  );
}
