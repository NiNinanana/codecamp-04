import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=56f2f6456a4bc97487f111ba4669797c";
    document.head.appendChild(script); // head에 script를 넣음

    // https://apis.map.kakao.com/web/documentation/#load
    // query string: 위 사이트에서 autoload=false를 넣으라고 했는데 뒤에 appkey도 넣어야 하기에 중간에 &을 넣어 합쳐준다.

    // script가 로드 된 후 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.48481, 126.89663), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          37.48481,
          126.89663
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";

            // const resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);
  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=56f2f6456a4bc97487f111ba4669797c"
        ></script>
      </Head> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}

// 다른 페이지에서 넘어올 때 kakaomap을 받아오기도 전에 실행이 되어버려서 나오지 않게 되는 것
// _app.tsx에 헤드부분을 넘겨주어 먼저 kakaomap을 다운받아 놨기에 나올 수 있게 된다.
