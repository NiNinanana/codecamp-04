import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인 먼저 고고고고고고");
      router.push(`/signIn`);
    }
  }, []);

  return <Component {...props} />;
};
