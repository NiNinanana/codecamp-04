import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  border: 1px solid yellow;
`;

const FirstDiv = styled.div`
  font-weight: bold;
  font-size: 30px;
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
  /* justify-content: spa; */
  padding-top: 130px;
`;

export default function LoginTestPage() {
  return (
    <Wrapper>
      <FirstWrapper>
        <FirstDiv>한번쯤 해보고 싶었던</FirstDiv>
        <SecondDiv>베이커리 수업</SecondDiv>
        <LoginImage src="/images/로그인 이미지.png" />
      </FirstWrapper>
      <MaImage src="/images/마카롱 이미지.jpeg" />
    </Wrapper>
  );
}
