import axios from "axios";
import { useState } from "react";

export default function Test() {
  const [data, setData] = useState(null);

  const onClickGet = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=117e347b1bc9481cab857b1eacfcae11"
      );
      setData(response?.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <button onClick={onClickGet}>불러오기</button>
      {data && <div>{data}</div>}
      {data?.map((el, index) => (
        <div key={index}>{el.articles[index].title}</div>
      ))}
    </>
  );
}
