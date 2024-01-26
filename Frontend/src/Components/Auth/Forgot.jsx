import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Input, Option, Stack } from "@mui/joy";
import Select, { selectClasses } from "@mui/joy/Select";
import React from "react";
import { Link } from "react-router-dom";
import { useCombinedContext } from "../DataContext";
function Forgot({isDarkMode}) {

  const handleButtonClick = () => {
    window.history.goBack();
  };

  return (
    <div style={{ backgroundColor: isDarkMode ? "#261450" : "white",height:"100vh"}}>
      <div>
        <div className="container p-4">
          <div>
            <Button
              variant="outlined"
              color="neutral"
              style={{background:isDarkMode ? "white" : "neutral"}}
              onClick={handleButtonClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M13.1575 2.36708C13.0656 2.27493 12.9564 2.20181 12.8362 2.15192C12.7159 2.10203 12.587 2.07635 12.4569 2.07635C12.3267 2.07635 12.1978 2.10203 12.0776 2.15192C11.9574 2.20181 11.8482 2.27493 11.7563 2.36708L5.1775 8.94583C5.10411 9.01907 5.04589 9.10607 5.00616 9.20184C4.96643 9.29761 4.94598 9.40027 4.94598 9.50396C4.94598 9.60764 4.96643 9.71031 5.00616 9.80608C5.04589 9.90185 5.10411 9.98884 5.1775 10.0621L11.7563 16.6408C12.1442 17.0287 12.7696 17.0287 13.1575 16.6408C13.5454 16.2529 13.5454 15.6275 13.1575 15.2396L7.42584 9.5L13.1654 3.76042C13.5454 3.38042 13.5454 2.74708 13.1575 2.36708Z"
                  fill="#1E232C"
                  stroke="#1E232C"
                  strokeWidth="0.2"
                />
              </svg>
            </Button>
          </div>
          <div
            className="fw-bold mt-2 mb-2"
            style={{
              position: "relative",
              fontSize: "30px",
              fontStyle: "normal",
              lineHeight: "-0.3px",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              Forgot Password?
            </span>
          </div>
          <div className="mb-4" style={{ fontSize: "16px", color: "#6A707C" }}>
            Please enter the email address linked with your account.
          </div>

          <div className="">
            <Input size="lg" placeholder="Enter your email" className="mb-5" />
          </div>

          <div className="mb-4">
            <Link to="/otp" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                style={{
                  position: "relative",
                  fontStyle: "normal",
                  lineHeight: "-0.3px",
                  background:
                    "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                }}
                fullWidth
              >
                <div
                  style={{
                    color: "white",
                    WebkitBackgroundClip: "text",
                    display: "inline-block",
                  }}
                >
                  Send Code
                </div>
              </Button>
            </Link>
          </div>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="text-center " style={{ marginTop: "150px" }}>
              Remember Password?{" "}
              <span style={{ color: "#35C2C1", fontWeight: "700" }}>
                {" "}
                Login
              </span>{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
