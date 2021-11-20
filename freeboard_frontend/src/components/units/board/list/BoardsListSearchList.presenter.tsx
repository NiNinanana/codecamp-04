import * as S from "./BoardsList.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardsListSearchUI(props) {
  let abc = props.el.title;

  if (abc.length > 11) {
    abc = abc.slice(0, 11) + "...";
  }

  return (
    <>
      <S.Row key={props.el._id}>
        {/* unique한 키값을 넣어주고 체크박스를 체크한 후 삭제하면 체크박스 체크 해제됨 */}
        <S.CheckBox>
          <input type="checkbox" />
        </S.CheckBox>
        {/* <S.Column>{index+1}</S.Column> */}
        <S.TitleButton id={props.el._id} onClick={props.justContents}>
          <S.Title>{abc}</S.Title>
        </S.TitleButton>
        {/* <S.Column>{el.writer}</S.Column> */}
        <S.Date>{getDate(props.el.createdAt)}</S.Date>
        <S.Column>
          <S.DeleteButton id={props.el._id} onClick={props.delete}>
            삭제
          </S.DeleteButton>
        </S.Column>
      </S.Row>
    </>
  );
}
