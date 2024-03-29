import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    // const { accessToken } = useContext(GlobalContext);

    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인 먼저 고고고고고고");
        router.push(`/23-04-login`);
      }
    });

    return <Component {...props} />;
  };
