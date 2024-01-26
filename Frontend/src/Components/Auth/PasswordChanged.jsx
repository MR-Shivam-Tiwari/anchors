import { Button } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
import { useCombinedContext } from "../DataContext";
function PasswordChanged({isDarkMode}) {
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Set height to 100% of viewport height for full-screen effect
        backgroundColor: isDarkMode ? "#261450" : "white",
        
      }}
    >
      <div>
        <div className="d-flex align-items-center  justify-content-center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-1024.png"
            alt=""
            style={{width:"100px", height:"100px"}}
          />
        </div>
        <div>
          {" "}
          <div
            className="fw-bold mt-2 mb-3 text-center"
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
              Password Changed!
            </span>
          </div>
        </div>
        <div className="mb-4" style={{ fontSize: "16px", color: "#6A707C" }}>
          Your password has been changed successfully.
        </div>
        <div className="mb-2 mt-4">
          <Link to="/login" style={{ textDecoration: "none" }}>
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
                Back to Login{" "}
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PasswordChanged;
