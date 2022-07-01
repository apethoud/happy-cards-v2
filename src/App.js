import "./App.css";
import HeaderFooter from "./components/HeaderFooter";
import Home from "./components/Home";
import CardBuilder from "./components/CardBuilder";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <HeaderFooter>
        {/* <Home /> */}
        <CardBuilder />
      </HeaderFooter>
    </ThemeProvider>
  );
}

export default App;
