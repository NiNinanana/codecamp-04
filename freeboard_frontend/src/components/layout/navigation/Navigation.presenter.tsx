import { TextWrapper, Navigation, Wrapper } from "./Navigation.styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function NavigationUI(props) {
  return (
    <>
      <Navigation>
        <Breadcrumbs aria-label="breadcrumb">
          <Wrapper>
            {/* <div>
              <NavigationImg src="/images/아이유 딸기달.png" />
            </div> */}
            <TextWrapper>
              <Link color="textPrimary" href="/" onClick={props.clickFree}>
                자유게시판
              </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={props.clickCarrot}
              >
                중고마켓
              </Link>
              <Link color="inherit" onClick={props.clickMyPgae}>
                마이페이지
              </Link>
            </TextWrapper>
          </Wrapper>
        </Breadcrumbs>
      </Navigation>
    </>
  );
}
