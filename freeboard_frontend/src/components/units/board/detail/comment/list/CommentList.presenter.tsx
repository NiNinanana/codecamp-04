import { getDate } from "../../../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import CommentWriteUI from "../write/CommentWrite.presenter";
import { useState } from "react";

export default function CommentListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  function onClickUpdateComment() {
    setIsEdit(true);
  }

  function ona() {
    alert("Assdfsddf");
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
            <S.DeleteButton id={props.el?._id} onClick={props.deleteComment}>
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
          updateComment={ona}
        />
      )}
    </>
  );
}
