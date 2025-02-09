import Greeting from "./components/Greeting";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import MainRoute from "./routers/MainRoute";

// !
// !
// >
function App() {
  const mainContainer =
    "container flex flex-row gap-4 items-center bg-gray1 px-4 py-4 mx-auto min-h-[100vh] max-w-[100%]";
  return (
    <>
      <div className={mainContainer}>
        <Sidebar />
        <div className="mb-auto mt-8 w-full">
          <div className="flex items-center justify-between mb-8">
            <Greeting />
            <Search />
          </div>
          <MainRoute />
        </div>
      </div>
    </>
  );
}

export default App;
