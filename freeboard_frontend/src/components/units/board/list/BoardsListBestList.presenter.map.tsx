import * as S from "./BoardsList.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardsListBestUIItem(props) {
  let abc = props.el.title;

  if (abc.length > 14) {
    abc = abc.slice(0, 14) + "...";
  }

  return (
    <>
      <S.BestContentsButton id={props.el._id} onClick={props.bestContents}>
        <S.BestContentsPop>
          <S.TitleWriterCreatedAt>
            <S.BestTitle>{abc}</S.BestTitle>
            <S.BestWriter>{props.el.writer}</S.BestWriter>
            <S.BestCreatedAt>{getDate(props.el.createdAt)}</S.BestCreatedAt>
          </S.TitleWriterCreatedAt>
          <S.BestLikeCount>
            👍 {props.el.likeCount - props.el.dislikeCount}
          </S.BestLikeCount>
        </S.BestContentsPop>
      </S.BestContentsButton>
    </>
  );
}
