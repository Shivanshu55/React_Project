import { useContext } from "react";
// import { useContext, useState } from "react";
// import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import BusDetail from "./BusDetail";
import { Button } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";
import BusContext from "./BusContext";

function SearchResults() {
  // const [buses, setBuses] = useState([]);
  // const [loader, setLoader] = useState(true);
  // const [source, setSource] = useState();
  // const [destination, setDestination] = useState();
  // const [journeyDate, setJourneyDate] = useState();
  // const location = useLocation();
  const busDetail = useContext(BusContext);
  const { from, to, date, buses, setBuses, busLoader } = busDetail;
  // const navigate = useNavigate();

  // useEffect(() => {
  //   //check if source, destination and date is empty
  //   if (!from || !to || !date.current.value === "") {
  //     navigate("/");
  //   }
  // else {
  //   setSource(location.state.source);
  //   setDestination(location.state.destination);
  //   setJourneyDate(location.state.journeyDate);
  // }
  // }, [from, to, date, navigate]);

  function handleCriteria(criteria) {
    const tempBuses = [...buses];
    if (criteria === "Departure") {
      //sort acc to Departure
      tempBuses.sort((a, b) => {
        const len1 = a.departureTime.length;
        const len2 = b.departureTime.length;
        const time1 =
          a.departureTime.slice(0, len1 - 2) +
          " " +
          a.departureTime.slice(len1 - 2);
        const time2 =
          b.departureTime.slice(0, len2 - 2) +
          " " +
          b.departureTime.slice(len2 - 2);

        return (
          Number(new Date(date.current.value + " " + time1)) -
          Number(new Date(date.current.value + " " + time2))
        );
      });
    } else if (criteria === "Arrival") {
      //sort acc to Arrival
      tempBuses.sort((a, b) => {
        const len1 = a.arrivalTime.length;
        const len2 = b.arrivalTime.length;
        const time1 =
          a.arrivalTime.slice(0, len1 - 2) +
          " " +
          a.arrivalTime.slice(len1 - 2);
        const time2 =
          b.arrivalTime.slice(0, len2 - 2) +
          " " +
          b.arrivalTime.slice(len2 - 2);

        return (
          Number(new Date(date.current.value + " " + time1)) -
          Number(new Date(date.current.value + " " + time2))
        );
      });
    } else if (criteria === "Price") {
      //sort acc to Price
      tempBuses.sort((a, b) => a.ticketPrice > b.ticketPrice);
    }

    setBuses(tempBuses);
  }

  if (busLoader) {
    return <Spinner animation="border" role="status"></Spinner>;
  }
  return (
    from &&
    to &&
    date && (
      <div className="bg-danger p-3">
        <div className="bg-white m-auto p-2 w-75 d-flex justify-content-evenly align-items-center">
          <h4>Sort By: </h4>
          <div className="w-75 d-flex justify-content-around">
            {["Departure", "Arrival", "Price"].map((criteria, index) => {
              return (
                <Button
                  key={index + 1}
                  variant="danger"
                  onClick={() => handleCriteria(criteria)}
                >
                  {criteria}
                </Button>
              );
            })}
          </div>
        </div>
        {
          // buses
          // .filter(
          //   (item) =>
          //     item.source === from.toLowerCase() &&
          //     item.destination === to.toLowerCase()
          // )
          // .map((bus, index) => {
          //   // return <BusDetail key={index + 1} source={source} destination={destination} journeyDate={journeyDate} bus={bus} />;
          //   return <BusDetail key={index + 1} bus={bus} />;
          // })
          buses.map((bus, index) => {
            return <BusDetail key={index + 1} bus={bus} />;
          })
        }
      </div>
    )
  );
}

export default SearchResults;
