import Sidebar from "./components/Sidebar";
import MainRoute from "./routers/MainRoute";

// !
// ! 
// > 
function App() {
  return (
    <>
      <div className="container flex flex-row gap-4 items-center bg-gray1 px-4 py-4 mx-auto min-h-[100vh] max-w-[100%]">
        <Sidebar />
        <MainRoute/>
      </div>
    </>
  );
}

export default App;
