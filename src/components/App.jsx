import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./today/Home";
import TopNav from "./today/TopNav";
import Weekly from "./week/Weekly";

// App component sets up the main structure of the application, including navigation using React Router
function App() {
  return (
    <div className="App">
      {/* Main container for the application */}
      <div className="Container">
        {/* Top navigation component */}
        <TopNav />

        {/* React Router setup for defining routes */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the weekly page */}
          <Route path="/weekly" element={<Weekly />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
