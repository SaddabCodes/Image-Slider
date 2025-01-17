import { useState } from "react";
import data from "./data.json";
export default function Slider() {
  const [next, setNext] = useState(0);

  const handleNext = () => {
    if (next === data.length - 1) {
      setNext(0);
    } else {
      setNext(next + 1);
    }
  };

  const handlePre = () => {
    if (next == 0) {
      setNext(data.length - 1);
    } else {
      setNext(next - 1);
    }
  };

  return (
    <div className="container">
      <div className="left-btn">
        <button onClick={handlePre}>{"<"}</button>
      </div>

      <img src={data[next].download_url} alt="image" />

      <div className="right-btn">
        <button onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
}
