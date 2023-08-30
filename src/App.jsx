import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Stock from "./components/pages/Stocks";
import Nav from "./components/Nav";
import Stocks from "./components/pages/Stocks";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stocks />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
