import CommentListUIItem from "./CommentList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "../../BoardDetail.queries";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentListUI(props) {
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: commentData, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
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

  const onLoadMore = () => {
    if (!commentData) return;

    fetchMore({
      variables: {
        page: Math.ceil(commentData?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComment: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
          // [기존꺼, 새로받은 10개]
        };
      },
    });
  };

  return (
    <>
      <ABC>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore} // scroll 을 내릴때마다 loadMore가 실행됨
          hasMore={true} // hasMore가 true일 때만 loadMore가 실행됨
        >
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
        </InfiniteScroll>
      </ABC>
    </>
  );
}
