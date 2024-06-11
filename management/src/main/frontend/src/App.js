import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/page/Main";
import Login from "./Login/page/Login";
import { useEffect } from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
