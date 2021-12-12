import { TextWrapper, Navigation, Wrapper } from "./Navigation.styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { INavigationUIProps } from "./Navigation.types";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export default function NavigationUI(props: INavigationUIProps) {
  const { accessToken } = useContext(GlobalContext);
  return (
    <>
      <Navigation>
        <Breadcrumbs aria-label="breadcrumb">
          <Wrapper>
            {/* <div>
              <NavigationImg src="/images/아이유 딸기달.png" />
            </div> */}
            <TextWrapper>
              <Link
                color={
                  String(props.location).includes("boards/list")
                    ? "textPrimary"
                    : "inherit"
                }
                href="/"
                onClick={props.clickFree}
              >
                자유게시판
              </Link>
              <Link
                color={props.isCarrot === true ? "textPrimary" : "inherit"}
                href="/getting-started/installation/"
                onClick={props.clickCarrot}
              >
                중고마켓
              </Link>
              <Link
                color={props.isMyPage === true ? "textPrimary" : "inherit"}
                onClick={props.clickMyPage}
              >
                마이페이지
              </Link>

              <Link
                color={props.isCat === true ? "textPrimary" : "inherit"}
                onClick={props.clickCat}
              >
                냥이
              </Link>
              {!accessToken && <Link onClick={props.clickLogin}>로그인</Link>}
              {accessToken && <Link onClick={props.clickLogout}>로그아웃</Link>}
            </TextWrapper>
          </Wrapper>
        </Breadcrumbs>
      </Navigation>
    </>
  );
}
