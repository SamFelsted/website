import React from 'react';
import NavBar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Resume from "./pages/Resume";
import Publications from "./pages/Publications";

function App() {
  return (
      <div className={"App"}>
          <NavBar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Main/>} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/unpublications" element={<Publications />} />
                  <Route path="*" element={<Main />} />
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
