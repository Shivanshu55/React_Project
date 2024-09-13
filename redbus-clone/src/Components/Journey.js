import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BusContext from "./BusContext";
import NavBar from "./Navbar";
import SearchBus from "./SearchBus";
import Home from "./Home";

function Journey({ Component }) {
  const { from, to, date } = useContext(BusContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!from || !to || !date.current.value === "") {
      navigate("/");
    }
  }, [from, to, date, navigate]);
  return (
    <>
      <Toaster />
      <Home />
      <NavBar />
      <SearchBus />
      <Component></Component>;
    </>
  );
}

export default Journey;
