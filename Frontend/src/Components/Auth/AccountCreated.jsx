import { Button } from "@mui/joy";
import React from "react";
import { useNavigate } from "react-router-dom";

function AccountCreated() {
  const navigate = useNavigate();
  const createpostclick = () =>{
    navigate("/dashboard")
  }
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
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0176 3.33331L24.3951 6.52665L29.8142 6.51665L31.4784 11.6733L35.8684 14.85L34.1842 20L35.8684 25.15L31.4784 28.3266L29.8142 33.4833L24.3951 33.4733L20.0176 36.6666L15.6401 33.4733L10.2209 33.4833L8.55675 28.3266L4.16675 25.15L5.85091 20L4.16675 14.85L8.55675 11.6733L10.2209 6.51665L15.6401 6.52665L20.0176 3.33331Z"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1843 20L18.351 24.1666L26.6843 15.8333"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-center">
            <p
              className="mb-5"
              style={{
                fontWeight: "700",
                fontSize: "24px",
                width: "197px",
                height: "56px",
                lineHeight: "28.2px",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Account Created Successfully
            </p>
          </div>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ marginTop: "28px" }}
          >
            <Button
              onClick={createpostclick}
              className="rounded-5 gap-4"
              style={{ width: "275px", height: "48px", background: "#404040" }}
            >
              Create Your First Post
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

export default AccountCreated;
