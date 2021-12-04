import { Radio } from "antd";
import * as S from "./createItem.styles";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import input from "@material-ui/core/input";

export default function CreateItemUI(props) {
  return (
    <S.Wrapper>
      <div>상품{props.isEdit ? "수정하기" : "등록하기"}</div>
      <div>
        <input
          placeholder="상품명"
          name="name"
          onChange={props.myInputs}
          defaultValue={props.data?.fetchUseditem?.name}
        />
      </div>
      <div>
        <input
          placeholder="요약"
          name="remarks"
          onChange={props.myInputs}
          defaultValue={props.data?.fetchUseditem?.remarks}
        />
      </div>
      <div>
        <input
          placeholder="설명"
          name="contents"
          onChange={props.myInputs}
          defaultValue={props.data?.fetchUseditem?.contents}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="가격"
          onChange={props.myInputsPrice}
          defaultValue={Number(props.data?.fetchUseditem?.price)}
        />
      </div>
      <div>
        <div>태그</div>
        <input type="text" />
      </div>
      <div>
        <div>사진</div>
        <button>+upload</button>
      </div>
      <div>
        <div>나타낼 사진</div>
        <Radio value={1}>사진1</Radio>
        <Radio value={2}>사진2</Radio>
      </div>
      <div>
        {props.isEdit && <button onClick={props.itemUpdate}>수정하기</button>}
        {!props.isEdit && <button onClick={props.itemUpload}>등록하기</button>}
      </div>
    </S.Wrapper>
  );
}
