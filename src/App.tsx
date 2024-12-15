import React from 'react';
import './App.css';
import NavBar from "./elements/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Resume from "./pages/Resume";

function App() {
  return (
      <div className={"App"}>
          <NavBar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Main/>} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="*" element={<Main />} />
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
