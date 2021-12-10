import { Modal, Radio, Upload } from "antd";
import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import * as S from "./createItem.styles";
// import ImgCrop from "antd-img-crop";
// import { useState } from "react";
import { ICreateItemUIProps } from "./CreateItem.types";
import Head from "next/head";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function CreateItemUI(props: ICreateItemUIProps) {
  // useEffect(() => {
  //   const script = document.createElement("script"); // <script></script>
  //   script.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=56f2f6456a4bc97487f111ba4669797c";
  //   document.head.appendChild(script); // head에 script를 넣음

  //   const script2 = document.createElement("script");
  //   script2.src =
  //     "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  //   document.head.appendChild(script2);

  //   script.onload = () => {
  //     window.kakao.maps.load(function () {
  //       const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
  //       const options = {
  //         // 지도를 생성할 때 필요한 기본 옵션
  //         center: new window.kakao.maps.LatLng(37.48481, 126.89663), // 지도의 중심좌표.
  //         level: 5, // 지도의 레벨(확대, 축소 정도)
  //       };

  //       const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  //     });
  //   };
  // });
  // const [myAddress, setMyAddress] = useState("");
  // const handleComplete = (data: any) => {
  //   console.log(data);
  //   setMyAddress(data.address);
  //   // setMyZonecode(data.zonecode);
  //   // setIsOpen((prev) => !prev);
  // };

  // useEffect(() => {
  //   const script = document.createElement("script"); // <script></script>
  //   script.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=56f2f6456a4bc97487f111ba4669797c&libraries=services";
  //   document.head.appendChild(script); // head에 script를 넣음

  //   // const script2 = document.createElement("script");
  //   // script2.src =
  //   script.onload = () => {
  //     window.kakao.maps.load(function () {
  //       const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
  //       const options = {
  //         // 지도를 생성할 때 필요한 기본 옵션
  //         center: new window.kakao.maps.LatLng(37.48481, 126.89663), // 지도의 중심좌표.
  //         level: 5, // 지도의 레벨(확대, 축소 정도)
  //       };

  //       const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

  //       const geocoder = new window.kakao.maps.services.Geocoder();
  //       console.log(kakao.maps.services);

  //       // 마커가 표시될 위치입니다
  //       const markerPosition = new window.kakao.maps.LatLng(
  //         37.48481,
  //         126.89663
  //       );

  //       // 마커를 생성합니다
  //       const marker = new window.kakao.maps.Marker({
  //         position: markerPosition,
  //       });

  //       // 마커가 지도 위에 표시되도록 설정합니다
  //       marker.setMap(map);

  //       geocoder.addressSearch(myAddress, function (results, status) {
  //         if (status === window.kakao.maps.services.Status.OK) {
  //           const result = results[0];

  //           const coords = new window.kakao.maps.LatLng(result.y, result.x);
  //           // 지도를 보여준다.
  //           container.style.display = "block";
  //           map.relayout();
  //           // 지도 중심을 변경한다.
  //           map.setCenter(coords);
  //           // 마커를 결과값으로 받은 위치로 옮긴다.
  //           marker.setPosition(coords);
  //         }
  //       });

  //       // 지도에 클릭 이벤트를 등록합니다
  //       // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
  //       window.kakao.maps.event.addListener(
  //         map,
  //         "click",
  //         function (mouseEvent) {
  //           // 클릭한 위도, 경도 정보를 가져옵니다
  //           const latlng = mouseEvent.latLng;

  //           // 마커 위치를 클릭한 위치로 옮깁니다
  //           marker.setPosition(latlng);

  //           // let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
  //           // message += "경도는 " + latlng.getLng() + " 입니다";

  //           // const resultDiv = document.getElementById("clickLatlng");
  //           // resultDiv.innerHTML = message;
  //         }
  //       );
  //     });
  //   };
  // }, []);

  // function sample5_execDaumPostcode() {
  //   new daum.Postcode({
  //     oncomplete: function (data) {
  //       var addr = data.address; // 최종 주소 변수

  //       // 주소 정보를 해당 필드에 넣는다.
  //       document.getElementById("sample5_address").value = addr;
  //       // 주소로 상세 정보를 검색
  //       geocoder.addressSearch(data.address, function (results, status) {
  //         // 정상적으로 검색이 완료됐으면
  //         if (status === daum.maps.services.Status.OK) {
  //           var result = results[0]; //첫번째 결과의 값을 활용

  //           // 해당 주소에 대한 좌표를 받아서
  //           var coords = new daum.maps.LatLng(result.y, result.x);
  //           // 지도를 보여준다.
  //           mapContainer.style.display = "block";
  //           map.relayout();
  //           // 지도 중심을 변경한다.
  //           map.setCenter(coords);
  //           // 마커를 결과값으로 받은 위치로 옮긴다.
  //           marker.setPosition(coords);
  //         }
  //       });
  //     },
  //   }).open();
  // }

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=56f2f6456a4bc97487f111ba4669797c&libraries=services";
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

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.myAddress, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">직거래 장소</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });

        // 마커가 표시될 위치입니다
        // const markerPosition = new window.kakao.maps.LatLng(
        //   37.48481,
        //   126.89663
        // );

        // // 마커를 생성합니다
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });

        // // 마커가 지도 위에 표시되도록 설정합니다
        // marker.setMap(map);

        // // 지도에 클릭 이벤트를 등록합니다
        // // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        // window.kakao.maps.event.addListener(
        //   map,
        //   "click",
        //   function (mouseEvent) {
        //     // 클릭한 위도, 경도 정보를 가져옵니다
        //     const latlng = mouseEvent.latLng;

        //     // 마커 위치를 클릭한 위치로 옮깁니다
        //     marker.setPosition(latlng);

        //     // let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
        //     // message += "경도는 " + latlng.getLng() + " 입니다";

        //     // const resultDiv = document.getElementById("clickLatlng");
        //     // resultDiv.innerHTML = message;
        //   }
        // );
      });
    };
  }, [props.myAddress]);

  return (
    <>
      {/* <input type="text" id="sample5_address" placeholder="주소" />
      <input
        type="button"
        onclick={sample5_execDaumPostcode()}
        value="주소 검색"
      />
      <div id="map"></div>
      style={{width: "300px", height: "300px", margin-top: "10px", display: "none"}} */}
      <S.Wrapper>
        <div>상품{props.isEdit ? "수정하기" : "등록하기"}</div>
        <S.InputWrapper>
          <S.ItemName
            placeholder="상품명"
            name="name"
            onChange={props.myInputs}
            defaultValue={props.data?.fetchUseditem?.name}
          />
          <S.ItemRemarks
            placeholder="요약"
            name="remarks"
            onChange={props.myInputs}
            defaultValue={props.data?.fetchUseditem?.remarks}
          />
          <S.ItemPrice
            type="number"
            placeholder="₩ 가격"
            onChange={props.myInputsPrice}
            defaultValue={Number(props.data?.fetchUseditem?.price)}
          />
          <S.ItemContents
            placeholder="설명"
            name="contents"
            onChange={props.myInputs}
            defaultValue={props.data?.fetchUseditem?.contents}
          />
        </S.InputWrapper>
        <div>
          <div>태그</div>
          <input type="text" />
        </div>
        <div>
          <div>사진</div>
          <input
            type="file"
            onChange={props.uploadImage}
            defaultValue={props.data?.fetchUseditem?.images?.[0]}
          />
          {/* <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop> */}
        </div>
        <div>
          <div>나타낼 사진</div>
          <Radio value={1}>사진1</Radio>
          <Radio value={2}>사진2</Radio>
        </div>
        <button onClick={props.onToggleModal}>우편번호 검색</button>
        <div>
          {props.isOpen && (
            <Modal
              title="우편번호 검색"
              visible={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
              // style={{ backgroundColor: "yellow" }}
            >
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}
          <div id="map" style={{ width: "500px", height: "400px" }}></div>
        </div>

        <div>
          {props.isEdit && <button onClick={props.itemUpdate}>수정하기</button>}
          {!props.isEdit && (
            <button onClick={props.itemUpload}>등록하기</button>
          )}
        </div>
      </S.Wrapper>
    </>
  );
}
