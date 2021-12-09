import { Modal, Radio, Upload } from "antd";
import { useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import * as S from "./createItem.styles";
// import ImgCrop from "antd-img-crop";
// import { useState } from "react";
import { ICreateItemUIProps } from "./CreateItem.types";
import Head from "next/head";

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


  function sample5_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = data.address; // 최종 주소 변수

            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("sample5_address").value = addr;
            // 주소로 상세 정보를 검색
            geocoder.addressSearch(data.address, function(results, status) {
                // 정상적으로 검색이 완료됐으면
                if (status === daum.maps.services.Status.OK) {

                    var result = results[0]; //첫번째 결과의 값을 활용

                    // 해당 주소에 대한 좌표를 받아서
                    var coords = new daum.maps.LatLng(result.y, result.x);
                    // 지도를 보여준다.
                    mapContainer.style.display = "block";
                    map.relayout();
                    // 지도 중심을 변경한다.
                    map.setCenter(coords);
                    // 마커를 결과값으로 받은 위치로 옮긴다.
                    marker.setPosition(coords)
                }
            });
        }
    }).open();
}

  return (
    <>
    <input type="text" id="sample5_address" placeholder="주소" />
    <input type="button" onclick={sample5_execDaumPostcode()} value="주소 검색" />
    <div id="map" ></div>
  {/* style={{width: "300px", height: "300px", margin-top: "10px", display: "none"}} */}
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
    </ㅇ>
  );
}
