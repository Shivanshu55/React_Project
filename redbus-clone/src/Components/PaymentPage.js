import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BusContext from "./BusContext";

function PaymentPage() {
  const { selectedSeat, selectedBus } = useContext(BusContext);
  const navigate = useNavigate();
  return (
    <Container className="bg-danger w-50 m-3 p-4 m-auto">
      <div className="bg-light p-5 w-75 m-auto">
        <div>
          [{selectedSeat.toString()}] = {selectedSeat.length} x Rs.
          {selectedBus.ticketPrice}/-
        </div>
        <div>Total = Rs.{selectedSeat.length * selectedBus.ticketPrice}/-</div>
      </div>
      <Button className="m-2" variant="success" onClick={() => {
        alert("Seats Booked Successfully.")
        navigate("/");
      }}>Proceed To Payment</Button>
    </Container>
  );
}

export default PaymentPage;
