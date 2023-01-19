import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Header from "./components/Header";
import { Chart } from "./components/Chart";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{fontFamily: "DM Sans"}}>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Pages />
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Chart /> */}
    </div>
  );
}

export default App;
