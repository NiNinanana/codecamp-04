import { useRouter } from "next/router";

export default function KakaoMapRoutingPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push(`/29-03-kakao-map-routed`);
  };

  return <button onClick={onClickMoveToMap}>맵으로 이동</button>;
}
