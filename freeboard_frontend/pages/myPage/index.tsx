import { withAuth } from "../../src/components/commons/withAuth";
import MyPage from "../../src/components/units/myPage/myPage.container";

function MyPagePage() {
  return <MyPage />;
}

export default withAuth(MyPagePage);
