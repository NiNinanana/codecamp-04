import CommentListUIItem from "./CommentList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "../../BoardDetail.queries";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

export default function CommentListUI(props) {
  const router = useRouter();
  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.myId,
      page: 1,
    },
  });

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
            deleteComment={props.deleteComment}
            isEdit={props.isEdit}
            key={el._id}
            el={el}
          />
        ))}
      </ABC>
    </>
  );
}
