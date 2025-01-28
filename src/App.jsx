import Sidebar from "./components/Sidebar";
import MainRoute from "./routers/MainRoute";

// !
// ! 
// > 
function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <MainRoute/>
      </div>
    </>
  );
}

export default App;
