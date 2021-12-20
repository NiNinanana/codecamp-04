import { Modal, Radio } from "antd";
import { useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import * as S from "./createItem.styles";
import { ICreateItemUIProps } from "./CreateItem.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function CreateItemUI(props: ICreateItemUIProps) {
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
        geocoder.addressSearch(
          props.myAddress,
          function (result: any, status: any) {
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
          }
        );
      });
    };
  }, [props.myAddress]);

  return (
    <>
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
          <S.TagsInput
            type="text"
            placeholder="태그(엔터를 입력하여 태그를 입력할 수 있습니다.)"
            onKeyUp={props.tagUp}
          />
          <div>
            {props.myTags.map((el, index) => (
              <S.Tags key={index} onClick={props.deleteTag(index)}>
                {el}&nbsp;
              </S.Tags>
            ))}
          </div>
        </div>
        <div>
          <div>사진</div>
          <S.ImageWrapper>
            <div>
              {new Array(3).fill(1).map((_, index) => (
                <>
                  <input
                    type="file"
                    onChange={props.uploadImage}
                    id={index}
                    ref={props.fileRef}
                  />
                  <S.PreviewImage
                    src={props.imageUrl?.[index]}
                    onClick={props.onClickUpload}
                  />
                  <br />
                </>
              ))}
            </div>
            <div>
              {/* <S.PreviewImage
                src={props.imageUrl?.[1]}
                onClick={props.onClickUpload}
              />
              <S.PreviewImage
                src={props.imageUrl?.[2]}
                onClick={props.onClickUpload}
              /> */}
            </div>
          </S.ImageWrapper>
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
