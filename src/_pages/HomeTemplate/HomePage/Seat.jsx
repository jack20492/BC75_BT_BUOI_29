import "./Seat.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSeatSelection } from "./duck/reducer";

export default function Seat({ seat }) {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectSeat = () => {
    setIsSelected((prev) => !prev);
    dispatch(toggleSeatSelection(seat));
  };

  return (
    <button
      onClick={handleSelectSeat}
      className={`seat mx-5 ${isSelected ? "seat__selected" : ""} ${
        seat.daDat ? "seat__booked" : ""
      }`}
      disabled={seat.daDat}
    >
      {seat.soGhe}
    </button>
  );
}
