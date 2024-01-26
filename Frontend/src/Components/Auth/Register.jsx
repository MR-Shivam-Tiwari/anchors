import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Input, Option, Stack } from "@mui/joy";
import Select, { selectClasses } from "@mui/joy/Select";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCombinedContext } from "../DataContext";
function Register({ isDarkMode }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegisterClick = async () => {
    try {
      const response = await fetch("http://localhost:3002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      if (response.ok) {
        // Registration successful, save name and email to localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        // Navigate to OTP page with email
        navigate("/otp");
      } else {
        // Handle registration error
        const data = await response.json();
        alert(data.message); // Display error message in an alert
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An unexpected error occurred."); // Display a generic error message
    }
  };
  
  
  return (
    <div className=" text-white container d-flex align-items-center justify-content-center">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: "387px",
          height: "429px",
          borderRadius: "10px",
          backgroundColor: "#191919",
        }}
      >
        <div>
          <div className="text-center mb-3">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3578_1589)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.9219 2.88022L19.1875 2.91355C19.8896 3.01042 20.8188 3.14063 21.3448 3.66772C21.7761 4.09792 21.9417 4.79792 22.0406 5.42292L22.099 5.82501C22.2302 6.77292 22.2646 8.01459 22.0406 9.39375C21.599 12.1156 20.15 15.3635 16.5115 17.8781C16.4917 18.074 16.4906 18.2719 16.4948 18.4698L16.5052 18.7656C16.5219 19.2208 16.5386 19.676 16.4115 20.1177C16.2136 20.8052 15.5084 21.2583 14.849 21.5833L14.5261 21.7365L14.1094 21.9198C13.3302 22.251 12.2781 22.5906 11.6188 21.9302C11.2229 21.5354 11.0604 20.9563 10.9281 20.3802L10.8792 20.1646C10.824 19.8923 10.7545 19.6232 10.6709 19.3583C10.6188 19.2063 10.5625 19.051 10.5021 18.8948C10.4356 18.9764 10.365 19.0547 10.2906 19.1292C9.93127 19.4885 9.39481 19.7396 8.95315 19.9156C8.47085 20.1063 7.92502 20.2729 7.41981 20.4104L7.16044 20.4792L6.66356 20.6031L6.21356 20.7073L5.67502 20.8219L5.33856 20.8875C5.17076 20.9186 4.99792 20.9084 4.83494 20.8577C4.67197 20.8071 4.52376 20.7176 4.40308 20.5969C4.28241 20.4763 4.19291 20.3281 4.14229 20.1651C4.09167 20.0021 4.08145 19.8293 4.11252 19.6615L4.2021 19.2125L4.36252 18.4854L4.49169 17.9542L4.5896 17.5792C4.7271 17.075 4.89377 16.5292 5.08544 16.0479C5.26044 15.6052 5.51148 15.0688 5.87085 14.7094L5.95419 14.6292L5.88752 14.6021C5.7095 14.5344 5.52918 14.4729 5.34689 14.4177L5.05835 14.3292C4.33544 14.1104 3.56252 13.875 3.08231 13.3938C2.49898 12.8115 2.69585 11.925 2.9771 11.1875L3.09169 10.9021L3.27606 10.4854L3.42919 10.1625C3.75419 9.50417 4.20731 8.79896 4.89481 8.60105C5.25939 8.49688 5.63856 8.49063 6.01981 8.50105L6.24898 8.50834C6.5469 8.51876 6.84377 8.53021 7.1344 8.50209C9.64898 4.86251 12.8969 3.41355 15.6188 2.97188C16.7107 2.79279 17.8217 2.76196 18.9219 2.88022ZM8.70106 16.0833C8.53712 15.962 8.34118 15.8914 8.13752 15.8803C7.93385 15.8692 7.7314 15.918 7.55523 16.0208L7.44065 16.0979L7.34377 16.1844L7.21356 16.349C6.94273 16.7406 6.78856 17.2823 6.66877 17.7885L6.55627 18.276L6.50314 18.4979L6.7021 18.45L7.13752 18.35C7.7396 18.2094 8.40731 18.0271 8.81773 17.6573C8.99618 17.4789 9.10383 17.2419 9.12069 16.9901C9.13755 16.7384 9.06247 16.4891 8.9094 16.2885L8.82398 16.1906L8.79898 16.1667L8.70106 16.0833ZM16.1834 8.81875C15.9899 8.62526 15.7603 8.47176 15.5075 8.36701C15.2548 8.26227 14.9839 8.20833 14.7103 8.20828C14.4367 8.20824 14.1658 8.26208 13.913 8.36673C13.6602 8.47139 13.4305 8.62481 13.237 8.81823C13.0435 9.01166 12.89 9.2413 12.7853 9.49405C12.6805 9.7468 12.6266 10.0177 12.6265 10.2913C12.6265 10.5649 12.6803 10.8358 12.785 11.0886C12.8896 11.3414 13.0431 11.5711 13.2365 11.7646C13.6271 12.1554 14.157 12.375 14.7095 12.3751C15.2621 12.3752 15.7921 12.1558 16.1828 11.7651C16.5736 11.3745 16.7932 10.8446 16.7933 10.292C16.7934 9.73949 16.574 9.20953 16.1834 8.81875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3578_1589">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            className="mb-5 text-center"
            style={{ fontWeight: "700", fontSize: "24px" }}
          >
            Create Your Account
          </div>
          <div>
            <div className="mb-3">
            <input
            className="px-5"
            style={{
              width: "275px",
              height: "48px",
              border: "1px solid rgba(255, 255, 255, 1)",
              background: "transparent",
              borderRadius: "25px",
              color: "white",
            }}
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
            </div>
            <div className="">
            <input
            className="px-5 text-white"
            style={{
              width: "275px",
              height: "48px",
              border: "1px solid rgba(255, 255, 255, 1)",
              background: "transparent",
              borderRadius: "25px",
            }}
            placeholder="Enter Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
            </div>
          </div>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ marginTop: "28px" }}
          >
            <Button
            onClick={handleRegisterClick}
            className="rounded-5 gap-4"
            style={{ width: "275px", height: "48px", background: "#404040" }}
          >
            Continue
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.04 7L9.59432 13M16.04 7L9.59432 1M16.04 7L1.00004 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
