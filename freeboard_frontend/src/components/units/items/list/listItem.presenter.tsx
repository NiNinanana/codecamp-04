import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./listItem.styles";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ListItemUI(props) {
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
          "서울 구로구 디지털로 300",
          function (result, status) {
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
  }, []);
  return (
    <>
      <S.Wrapper>
        <S.List onClick={props.list}>상품 목록</S.List>
        <S.InputWrapper>
          <S.SearchInput
            type="text"
            placeholder="상품명을 입력하세요"
            onChange={props.searchContents}
            onKeyUp={props.enterKey}
          />
          <S.SearchButton onClick={props.search}>검색</S.SearchButton>
          <S.CreateButton onClick={props.create}>상품 등록하기</S.CreateButton>
          <S.BasketButton onClick={props.basket}>장바구니</S.BasketButton>
        </S.InputWrapper>
        <div id="map" style={{ width: "500px", height: "400px" }}></div>
        <S.ListWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {!props.isSearch &&
              props.data?.fetchUseditems.map((el) => (
                <S.ItemWrapper key={uuidv4()}>
                  {el.images?.[0] && (
                    <S.ItemImage
                      onClick={props.onClickDetail(el)}
                      id={el._id}
                      src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    />
                  )}
                  {!el.images?.[0] && (
                    <S.ItemImage
                      src={`/images/고앵이.gif`}
                      onClick={props.onClickDetail(el)}
                      id={el._id}
                    />
                  )}
                  <S.ItemTextWrapper>
                    <S.ItemName onClick={props.onClickDetail(el)} id={el._id}>
                      {el.name}
                    </S.ItemName>
                    <S.ItemGreyWrapper>
                      <S.ItemRemarks>{el.remarks} •</S.ItemRemarks>
                      <S.ItemCreatedAt>{getDate(el.createdAt)}</S.ItemCreatedAt>
                    </S.ItemGreyWrapper>
                    <S.ItemPrice>
                      {el.price === 0 && "무료나눔💚"}
                      {el.price > 0 && (
                        <>{el.price.toLocaleString("ko-KR")}원</>
                      )}
                    </S.ItemPrice>
                  </S.ItemTextWrapper>
                </S.ItemWrapper>
              ))}
          </InfiniteScroll>
          <S.ListWrapper>
            <div>aaaa</div>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMoreSearch}
              hasMore={true}
              useWindow={false}
            >
              {props.isSearch &&
                props.searchData?.fetchUseditems.map((el) => (
                  <S.ItemWrapper key={uuidv4()}>
                    {el.images?.[0] && (
                      <S.ItemImage
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                      />
                    )}
                    {!el.images?.[0] && (
                      <S.ItemImage src={`/images/고앵이.gif`} />
                    )}
                    <S.ItemTextWrapper>
                      <S.ItemName onClick={props.onClickDetail} id={el._id}>
                        {el.name}
                      </S.ItemName>
                      <S.ItemGreyWrapper>
                        <S.ItemRemarks>{el.remarks} •</S.ItemRemarks>
                        <S.ItemCreatedAt>
                          {getDate(el.createdAt)}
                        </S.ItemCreatedAt>
                      </S.ItemGreyWrapper>
                      <S.ItemPrice>
                        {el.price === 0 && "무료나눔💚"}
                        {el.price > 0 && (
                          <>{el.price.toLocaleString("ko-KR")}원</>
                        )}
                      </S.ItemPrice>
                    </S.ItemTextWrapper>
                  </S.ItemWrapper>
                ))}
            </InfiniteScroll>
          </S.ListWrapper>
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
}
