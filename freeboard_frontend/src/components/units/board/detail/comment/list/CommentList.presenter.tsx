import { getDate } from "../../../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import CommentWriteUI from "../write/CommentWrite.presenter";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import { DELETE_BOARD_COMMENT } from "../../BoardDetail.queries";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ICommentListUIItemProps } from "./CommentList.types";

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  let pass = 0;
  function onClickUpdateComment() {
    setIsEdit(true);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    console.log(password);
    pass = event.target.value;
  }

  function info() {
    Modal.info({
      title: "비밀번호를 입력하세요!!!",
      content: <input type="password" onChange={onChangePassword} />,
      onOk() {
        console.log(pass);
        onClickDeleteComment();
      },
    });
  }

  async function onClickDeleteComment() {
    // const passwordPrompt = prompt("비밀번호를 입력해주세요");
    setIsEdit(false);

    try {
      await deleteBoardComment({
        variables: {
          password: pass,
          boardCommentId: props.el?._id,
        },
        // refetchQueries: [{query: FETCH_BOARD, variables: {_id: data?.fetchBoard._id}}]
      });
      alert("삭제되었습니다.");
      router.push(`/boards/${router.query.myId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  return (
    <>
      {isEdit || (
        <S.CommentWrapper>
          {/* <div>{props.commentDataWriter}</div>
        <div>{props.commentDataContents}</div> */}
          <S.CommentWriter>{props.el?.writer}</S.CommentWriter>
          <S.CommentContents>{props.el?.contents}</S.CommentContents>
          <S.Date>{getDate(props.el?.createdAt)}</S.Date>
          <S.CommentUpdate onClick={onClickUpdateComment}>수정</S.CommentUpdate>
          <S.CommentDelete>
            <S.DeleteButton id={props.el?._id} onClick={info}>
              삭제
            </S.DeleteButton>
          </S.CommentDelete>
        </S.CommentWrapper>
      )}
      {isEdit && (
        <CommentWriteUI
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
          key={props.key}
        />
      )}
    </>
  );
}
