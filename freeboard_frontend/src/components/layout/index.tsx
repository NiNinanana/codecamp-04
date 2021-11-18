import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.contatiner";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.contatiner";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  /* background-color: #93b5c6; */
  background-color: white;
`;
const Body = styled.div`
  /* background-color: #93b5c6; */
`;
const BodyWrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  width: 200px;
  height: 400px;
  background-color: yellow;
`;

const HIDDEN_HEADERS = [];
// 01-01-emotion에서만 헤더가 안나오게

const HIDDEN_NAVIGATION = ["/boards/list", "/boards/new"];
const HIDDEN_BANNER = ["/boards/list", "/boards/new"];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  // 현재 주소값을 히든 헤더스가 갖고 있는지 확인

  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      {/* 이즈히든헤더가 false일때만 헤더가 나옴 */}
      {!isHiddenBanner && <Banner />}
      {!isHiddenNavigation && <Navigation />}
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
