import styled from "@emotion/styled";

const ImagesWrapper = styled.div`
  overflow: scroll;
  position: relative;
  scroll-snap-type: y mandatory;
`;

const First = styled.div`
  position: absolute;
  scroll-snap-align: start;
  /* background-image: url("/images/풍경1.jpeg"); */
`;
const Second = styled.div`
  position: absolute;
  scroll-snap-align: start;
  /* background-image: url("/images/풍경2.jpeg"); */
`;
const Third = styled.div`
  position: absolute;
  scroll-snap-align: start;
  /* background-image: url("/images/풍경3.jpeg"); */
`;

const FirstImage = styled.img`
  height: 900px;
  width: 1600px;
`;
const SecondImage = styled.img`
  height: 900px;
  width: 1600px;
`;
const ThirdImage = styled.img`
  height: 900px;
  width: 1600px;
`;

export default function Home() {
  return (
    <>
      {/* <Wrapper>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Wrapper> */}
      <ImagesWrapper>
        <First>a</First>
        <FirstImage src="/images/풍경1.jpeg" />
        <Second>b</Second>
        <SecondImage src="/images/풍경2.jpeg" />
        <Third>c</Third>
        <ThirdImage src="/images/풍경3.jpeg" />
      </ImagesWrapper>
    </>
  );
}
