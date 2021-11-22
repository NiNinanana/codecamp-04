import axios from "axios";
import { useEffect, useState } from "react";
import CatUI from "./Cat.presenter";

export default function Cat() {
  const [catUrl, setCatUrl] = useState("");
  useEffect(() => {
    async function fetchCat() {
      const result: any = await axios.get("https://thatcopy.pw/catapi/rest/");
      setCatUrl(result.data.url);
    }
    fetchCat();
  }, []);

  return (
    <>
      <CatUI catUrl={catUrl} />
    </>
  );
}
