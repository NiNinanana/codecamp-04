import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styled from "@emotion/styled";

const mapStyles = {
  width: "800px",
  height: "450px",
};

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  margin-left: 130px;
  margin-top: 30px;
`;

const MyMap = (props) => {
  return (
    <Wrapper>
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 37.556, lng: 126.972 }}
      >
        <Marker position={{ lat: 37.485, lng: 126.896 }} />
        <Marker position={{ lat: 37.556, lng: 126.972 }} />
      </Map>
    </Wrapper>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDi2M8IuDK84IwtD4D6_B44y490xDugoAI",
})(MyMap);

// 길찾기 해보자
