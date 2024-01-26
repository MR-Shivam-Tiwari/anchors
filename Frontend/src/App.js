import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Otp from "./Components/Auth/Otp";
import Forgot from "./Components/Auth/Forgot";
import NewPassword from "./Components/Auth/NewPassword";
import PasswordChanged from "./Components/Auth/PasswordChanged";
import Dashboard from "./Components/DashBoard/Dashboard";
import { CombinedProvider } from "./Components/DataContext";

import Navbar from "./Components/HomeComponent/Navbar";
import './App.css'
import AccountCreated from "./Components/Auth/AccountCreated";
// Define routesWithoutNavbar outside the App component


const App = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDarkMode") === "true");

  // useEffect(() => {
  //   // Define routes without Navbar
  //   const routesWithoutNavbar = ["/login", "/register", "/otp", "/password-change", "/forgot-password", "/new-password"];
    
  //   // Get the current route
  //   const currentRoute = window.location.pathname;

  //   // Check if the current route is in the exclusion list
  //   setIsNavbarVisible(!routesWithoutNavbar.includes(currentRoute));
  // }, []);

  const handleDarkModeChange = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
    // Optionally, you can save the updated dark mode state to localStorage here
  };
  return (
    <CombinedProvider>
      <Router>
      <div>
          {/* Navbar will only be shown if isNavbarVisible is true */}
          {isNavbarVisible && (
            <Navbar isDarkMode={isDarkMode} onDarkModeChange={handleDarkModeChange} />
          )}
        </div>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} />} />
         

          {/* Auth Part */}
          <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
          <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />
          <Route path="/otp" element={<Otp isDarkMode={isDarkMode} />} />
          <Route path="/account-created" element={<AccountCreated isDarkMode={isDarkMode} />} />
          <Route path="/password-change" element={<PasswordChanged isDarkMode={isDarkMode} />} />
          <Route path="/forgot-password" element={<Forgot isDarkMode={isDarkMode} />} />
          <Route path="/new-password" element={<NewPassword isDarkMode={isDarkMode} />} />
        </Routes>
        <style>
            {`
          /* Hide the scrollbar for Chrome, Safari, and Edge */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}
          </style>
      </Router>
    </CombinedProvider>
  );
};

export default App;
