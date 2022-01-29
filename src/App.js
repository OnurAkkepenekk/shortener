import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import RouteMe from "./Components/RouteMe/RouteMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} ></Route>
          <Route path="/:code" element={<RouteMe/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
