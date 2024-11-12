import "./Seat.scss";
import { useState } from "react";
import { setBookingSeat } from "./duck/reducer";
import { useDispatch } from "react-redux";

export default function Seat(props) {
  const dispatch = useDispatch();
  const { seat } = props;
  const [isSelect, setIsSelect] = useState(false);

  const handleSelectSeat = () => {
    setIsSelect(!isSelect);
    dispatch(setBookingSeat(seat));
  };

  return (
    <button
      onClick={handleSelectSeat}
      className={`${isSelect ? "seat__selected" : ""} mx-5 seat ${
        seat.daDat ? "seat__booked" : ""
      }`}
      disabled={seat.daDat}
    >
      {seat.soGhe}
    </button>
  );
}
