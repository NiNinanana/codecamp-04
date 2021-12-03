import { Radio } from "antd";
import * as S from "./createItem.styles";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function CreateItemUI(props) {
  return (
    <S.Wrapper>
      <div>상품등록하기</div>
      <div>
        <TextField label="상품명" name="name" onChange={props.myInputs} />
      </div>
      <div>
        <TextField label="요약" name="remarks" onChange={props.myInputs} />
      </div>
      <div>
        <TextField label="설명" name="contents" onChange={props.myInputs} />
      </div>
      <div>
        <TextField type="number" label="가격" onChange={props.myInputsPrice} />
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
        <button onClick={props.itemUpload}>등록하기</button>
      </div>
    </S.Wrapper>
  );
}
