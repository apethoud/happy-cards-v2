import "./App.css";
import HeaderFooter from "./components/HeaderFooter";
import HolidayList from "./components/HolidayList";
import Home from "./components/Home";

function App() {
  return (
    <HeaderFooter>
      {/* <Home /> */}
      <HolidayList />
    </HeaderFooter>
  );
}

export default App;
