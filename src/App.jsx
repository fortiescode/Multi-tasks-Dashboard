import { Routes, Route } from "react-router-dom";
import "./css/reset.css";
import Sidebar from "./components/Sidebar";
import Habites from "./routers/Habites";
import Home from "./routers/Home";
import Setting from "./routers/Setting";
import Baggage from "./routers/Baggage";
import Notification from "./routers/Notification";
import Exercise from "./routers/Exercise";
import Work from "./routers/Work";
import Hobbies from "./routers/Hobbies";
import Morning from "./routers/Morning";
// !
// ! 
// > 
function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/habites" element={<Habites />} />
          <Route path="/baggage" element={<Baggage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/work" element={<Work />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/morning" element={<Morning />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
