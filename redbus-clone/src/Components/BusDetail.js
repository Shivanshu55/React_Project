import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BusContext from "./BusContext";

function BusDetail({ bus }) {
  const navigate = useNavigate();
  const { setSelectedBus } = useContext(BusContext);
  function seatBooking() {
    setSelectedBus(bus);
    navigate("/seat-book");
  }
  return (
    <div
      className="bg-white m-3 d-flex justify-content-around text-center"
      onClick={seatBooking}
    >
      <div className="d-flex flex-column justify-content-center w-25">
        <div>BUS NAME</div>
        <div className="fs-4 fw-bold">{bus.busName}</div>
      </div>
      <div className="d-flex flex-column justify-content-center w-25">
        <div>DEPARTURE</div>
        <div className="fs-4 fw-bold">{bus.departureTime}</div>
      </div>
      <div className="d-flex flex-column justify-content-center w-25">
        <div>ARRIVAL</div>
        <div className="fs-4 fw-bold">{bus.arrivalTime}</div>
      </div>
      <div className="d-flex flex-column justify-content-center w-25">
        <div>PRICE</div>
        <div className="fs-4 fw-bold">{bus.ticketPrice}/-</div>
      </div>
    </div>
  );
}

export default BusDetail;
