import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/page/Main";
import LoginPage from "./Login/Pages/LoginPage";
import { useEffect } from "react";
import AddUserInfoPage from "./Login/Pages/AddUserInfoPage";
import Header from "./layout/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/test" element={<AddUserInfoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
