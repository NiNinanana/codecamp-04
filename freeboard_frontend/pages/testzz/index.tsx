import styled from "@emotion/styled";

const Div = styled.div`
  font-size: 30px;
  color: blue;
  border: 3px dotted black;
  margin-bottom: 30px;
  background-color: yellow;
`;

export default function TestZZPage() {
  return (
    <>
      <Div>안녕하세요</Div>
      <button>검색</button>
      <img src="/images/고앵이.gif" />;
    </>
  );
}
