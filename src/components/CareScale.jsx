import { useState } from "react";
import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

export default function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const quantity = { 1: "très peu", 2: "peu", 3: "beaucoup" };

  const [showMessage, setShowMessage] = useState(false);

  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="Sun icon" />
    ) : (
      <img src={water} alt="Water icon" />
    );

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}
    >
      {range.map(
        (rangeElem) =>
          scaleValue >= rangeElem && (
            <span key={rangeElem.toString()} className="mt-1">
              {scaleType}
            </span>
          ),
      )}
      {showMessage && (
        <p className="absolute left-11 w-80 text-xs transition">
          {`Cette plante requiert ${quantity[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`}
        </p>
      )}
    </div>
  );
}
