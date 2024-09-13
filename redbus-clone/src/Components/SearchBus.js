import React, { useContext } from "react";
import { InputGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { TbArrowsExchange } from "react-icons/tb";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BusContext from "./BusContext";

function SearchBus() {
  const busDetail = useContext(BusContext);
  const { from, to, date, setBuses, setBusLoader } = busDetail;
  const navigate = useNavigate();

  const handleInterChange = () => {
    const newFrom = to.current.value;
    const newTo = from.current.value;
    from.current.value = newFrom;
    to.current.value = newTo;
  };

  async function searchBuses() {
    if (
      from.current.value === "" ||
      to.current.value === "" ||
      date.current.value === ""
    ) {
      toast.error("All fields are required.");
    } else {
      // navigate("/results", {
      //   state: { source: from, destination: to, journeyDate: date.current.value},
      // });
      await fetchBuses();
      navigate("/results");
    }
  }

  async function fetchBuses() {
    //fetch api call for buses
    setBusLoader(true);
    const data = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from.current.value.toLowerCase()}&destination=${to.current.value.toLowerCase()}`
    );
    const response = await data.json();
    setBuses(response);
    setBusLoader(false);
  }

  return (
    <div id="search-container" className="m-5">
      <h1 className="fs-2 lh-lg fw-bold text-white">{`India's No. 1 Online Bus Ticket Booking Site`}</h1>
      <InputGroup className="mb-3 flex align-items-center">
        <Form.Control
          type="text"
          ref={from}
          placeholder="From"
          aria-label="Text input with dropdown button"
        />
        <TbArrowsExchange
          style={{
            fontSize: "25px",
            border: "1px solid black",
            borderRadius: "15px",
          }}
          onClick={handleInterChange}
        />
        <Form.Control
          type="text"
          ref={to}
          placeholder="To"
          aria-label="Text input with dropdown button"
        />
        <Form.Control
          type="date"
          ref={date}
          placeholder="Date"
          aria-label="Text input with dropdown button"
        />
        <Button variant="danger" onClick={searchBuses}>
          Search Buses
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchBus;
