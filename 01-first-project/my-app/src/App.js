import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      {/* <Profile /> */}
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
