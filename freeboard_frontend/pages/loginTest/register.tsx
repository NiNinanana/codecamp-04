import styled from "@emotion/styled";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Wrapper = styled.div`
  display: flex;
  border: 1px solid yellow;
`;

const FirstDiv = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-right: 100px;
`;

const SecondDiv = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const LoginImage = styled.img`
  margin-top: 20px;
  width: 400px;
  height: 100px;
`;

const MaImage = styled.img`
  width: 500px;
  height: 500px;
`;

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* padding-top: 130px; */
  width: 400px;
`;

const MyInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
`;

const MyButton = styled.button`
  /* margin-right: 130px; */
  background-color: orange;
  width: 200px;
  height: 40px;
  border: none;
  color: white;
`;

const MyDiv = styled.div`
  margin-right: 160px;
  font-size: 15px;
`;

export default function RegisterTestPage() {
  return (
    <Wrapper>
      <FirstWrapper>
        <FirstDiv>회원가입</FirstDiv>
        {/* <MyDiv>이름</MyDiv> */}
        <MyInput type="text" placeholder="이름" />
        <MyInput type="text" placeholder="이메일" />
        <MyInput type="number" placeholder="전화번호" />
        <MyInput type="password" placeholder="비밀번호" />
        <MyInput type="password" placeholder="비밀번호 확인" />
        <MyButton>회원가입</MyButton>
      </FirstWrapper>
      <MaImage src="/images/마카롱 이미지.jpeg" />
    </Wrapper>
  );
}
