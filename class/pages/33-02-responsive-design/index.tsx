import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  /* 반응형 어떻게 쓰셨어요?? */
  /* media query로 했슴다 */
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }
  /* 768px보다 크고 1199px보다 작을 때, 테블릿 사이즈 */

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
    /* display: none; */
    /* 모바일에서는 안보이게 */
  }
  /* 모바일 사이즈 */

  /* 위 css가 먹고 모바일사이즈가 되면 아래것을 추가로 먹이는 것 */
  /* 반응형은 하나하나 전부 css를 다 만들어줘야한다. */
`;

export default function ResponsiveDesignPage() {
  return (
    <>
      <Wrapper>상자</Wrapper>
    </>
  );
}
