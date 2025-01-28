import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Habites from "./Habites";
import Baggage from "./Baggage";
import Exercise from "./Exercise";
import Notification from "./Notification";
import Work from "./Work";
import Hobbies from "./Hobbies";
import Morning from "./Morning";
import Setting from "./Setting";

function MainRoute() {
  const location = useLocation();

  return (
    <AnimatePresence mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/habites" element={<Habites />} />
        <Route path="/baggage" element={<Baggage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/work" element={<Work />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/morning" element={<Morning />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </AnimatePresence>
  );
}

export default MainRoute;
