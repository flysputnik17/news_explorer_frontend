import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <div className="page__upper-content">
        <Header isLoggedIn={isLoggedIn} />
        {/* <Routes>
          <Route exact path="/"></Route>
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
