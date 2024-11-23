import { useSelector } from "react-redux";
import Seat from "./Seat";

export default function HomePage() {
  const { listSeat, listSeatSelected } = useSelector(
    (state) => state.bookingTicketReducer
  );

  const renderListSeat = () =>
    listSeat?.map((row) => (
      <div key={row.hang} className="seat-row">
        <div className="seat-row-label">{row.hang}</div>
        <div className="seat-row-seats">
          {row.danhSachGhe.map((seat) => (
            <Seat key={seat.soGhe} seat={seat} />
          ))}
        </div>
      </div>
    ));

  const totalPrice = listSeatSelected.reduce(
    (total, seat) => total + seat.gia,
    0
  );

  return (
    <div className="booking-page">
      <h1 className="page-title">Movie Ticket Booking</h1>

      <div className="seat-layout">{renderListSeat()}</div>

      <div className="selected-seats-summary">
        <h2>Selected Seats</h2>
        <ul className="selected-seats-list">
          {listSeatSelected.map((seat) => (
            <li key={seat.soGhe} className="selected-seat-item">
              Seat {seat.soGhe} - Price: {seat.gia.toLocaleString()}đ
            </li>
          ))}
        </ul>
        <div className="total-price">
          Total: <span>{totalPrice.toLocaleString()}đ</span>
        </div>
      </div>
    </div>
  );
}
