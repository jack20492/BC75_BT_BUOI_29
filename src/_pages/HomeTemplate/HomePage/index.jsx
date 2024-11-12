import { useSelector } from "react-redux";
import Seat from "./Seat";
// import "./styles.scss"; // Import the SCSS file

export default function HomePage() {
  const props = useSelector((state) => state.bookingTicketReducer);

  const renderListSeat = () => {
    const { listSeat } = props;
    if (listSeat && listSeat.length > 0) {
      return listSeat.map((item) => (
        <div key={item.hang} className="seat-row">
          {/* Row Label */}
          <div className="seat-row-label">{item.hang}</div>
          {/* Seats in the row */}
          <div className="seat-row-seats">
            {item.danhSachGhe.map((seat) => (
              <Seat key={seat.soGhe} seat={seat} />
            ))}
          </div>
        </div>
      ));
    }
  };

  const totalPrice = () =>
    props.listSeatSelected.reduce((total, seat) => (total += seat.gia), 0);

  return (
    <div className="booking-page">
      <h1 className="page-title">Movie Ticket Booking</h1>

      {/* Seat Layout */}
      <div className="seat-layout">
        {/* Column Numbers Header */}
        {/* <div className="seat-column-header">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="seat-column-number">
              {i + 1}
            </div>
          ))}
        </div> */}

        {renderListSeat()}
      </div>

      {/* Selected Seats and Total Price */}
      <div className="selected-seats-summary">
        <h2>Selected Seats</h2>
        <ul className="selected-seats-list">
          {props.listSeatSelected.map((seat) => (
            <li key={seat.soGhe} className="selected-seat-item">
              Seat {seat.soGhe} - Price: {seat.gia.toLocaleString()}đ
            </li>
          ))}
        </ul>
        <div className="total-price">
          Total: <span>{totalPrice().toLocaleString()}đ</span>
        </div>
      </div>
    </div>
  );
}
