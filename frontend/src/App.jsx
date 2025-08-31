import React from "react";
import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import RegistrationPage from "./components/registrationPage";
import LoginPage from "./components/LoginPage";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegistrationPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
