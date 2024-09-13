import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BusContext from "./BusContext";

function SeatSelection() {
  const { selectedSeat, setSelectedSeat } = useContext(BusContext);
  const navigate = useNavigate();

  function seatBooking() {
    navigate("/proceed-to-payment");
  }

  return (
    <Container className="container p-3 bg-danger text-center">
      {[1, 2, 3].map((seatRow, i) => {
        return (
          <div
            className="row w-75 bg-light m-auto justify-content-md-center"
            key={seatRow}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((seat, j) => {
              return (
                <div
                  className={`border col-sm-1 m-2 p-4 ${
                    selectedSeat.includes(i * 8 + j + 1)
                      ? "bg-success"
                      : "bg-secondary-subtle"
                  } rounded-3 mt-${Math.ceil(seatRow * 1.5)}`}
                  key={i * 8 + j + 1}
                  onClick={() => {
                    if (selectedSeat.includes(i * 8 + j + 1)) {
                      const filteredSeat = selectedSeat.filter((seat) =>
                        seat !== i * 8 + j + 1 ? true : false
                      );
                      setSelectedSeat(filteredSeat);
                    } else {
                      setSelectedSeat([...selectedSeat, i * 8 + j + 1]);
                    }
                  }}
                >
                  {i * 8 + j + 1}
                </div>
              );
            })}
          </div>
        );
      })}
      {selectedSeat.length ? (
        <Button className="m-3" variant="success" onClick={seatBooking}>
          Book Seats
        </Button>
      ) : null}
    </Container>
  );
}

export default SeatSelection;
