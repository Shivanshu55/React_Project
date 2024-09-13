import "../Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchResults from "./SearchResults";
import SeatSelection from "./SeatSelection";
import { useRef, useState } from "react";
import BusContext from "./BusContext";
import Journey from "./Journey";
import PaymentPage from "./PaymentPage";
import Login from "./Login";

function App() {
  const from = useRef("");
  const to = useRef("");
  const date = useRef("");
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [busLoader, setBusLoader] = useState(false);
  return (
    <div className="App">
      <BusContext.Provider
        value={{
          from,
          to,
          date,
          buses,
          setBuses,
          selectedBus,
          setSelectedBus,
          selectedSeat,
          setSelectedSeat,
          busLoader,
          setBusLoader,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Journey Component={Home} />} />
            <Route path="/login" Component={Login} />
            <Route
              path="/results"
              element={<Journey Component={SearchResults} />}
            />
            <Route
              path="/seat-book"
              element={<Journey Component={SeatSelection} />}
            />
            <Route
              path="/proceed-to-payment"
              element={<Journey Component={PaymentPage} />}
            />
          </Routes>
        </BrowserRouter>
      </BusContext.Provider>
    </div>
  );
}

export default App;
