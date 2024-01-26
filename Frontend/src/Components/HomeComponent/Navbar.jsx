import React, { useEffect, useLayoutEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import "./App.css";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/joy";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    setName(storedName || "");
    setEmail(storedEmail || "");
  }, []);

  return (
    <div>
      <div>
        <div className="text-warning shadow p-2">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between">
              <div className="d-flex gap-4 ms-4">
                <div className="d-flex gap-2">
                  <Button
                    variant="soft"
                    color="none"
                    className="navbar-toggler px-0"
                    type="button"
                    // onClick={toggleMobileMenu}
                    style={{
                      display: window.innerWidth <= 767 ? "block" : "none",
                    }}
                  >
                    <span className="navbar-toggler-icon fs-5"></span>
                  </Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="40"
                    color="white"
                    fill="currentColor"
                    class="bi bi-grid-3x3-gap-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                  </svg>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item text-white">
                    <Link
                      className={`nav-link text-white ${
                        location.pathname === "/" && "active"
                      }`}
                      to="/"
                      style={{ fontWeight: "700", fontSize: "20px" }}
                    >
                      ANONYMOUS
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="me-5">
                <div
                  className="text-white d-flex gap-3"
                  style={{ fontWeight: "700", fontSize: "20px" }}
                >
                  {location.pathname === "/dashboard" && (
                    <div className="d-flex gap-3">
                      Welcome {name && <p>{name}</p>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
