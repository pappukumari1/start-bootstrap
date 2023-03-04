import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  const [color, setColor] = React.useState("#00000000");
  function RainBow() {
    return this.scrollY > 50 ? setColor("#212529") : setColor("#00000000");
  }
  window.addEventListener("scroll", RainBow);
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* transparent */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: color,
          top: "0",
          right: "0",
          left: "0",
          Zindex: "1030px",
          width: "100%",
        }}
      >
        {/* <Toolbar > */}
        <div
          class="m-4 px-5 "
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <a>
              <img
                width={"50%"}
                src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
              />
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "33px" }}>
            <div className="nav">
              <a
                href="#services"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h6  sx={{ flexGrow: 1 }}>
                  SERVICES
                </h6>
              </a>
            </div>
            <div className="nav">
              <a
                href="#portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h6 sx={{ flexGrow: 1 }}>
                  PORTFOLIO
                </h6>
              </a>
            </div>
            <div className="nav">
              <a
                href="#about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h6 sx={{ flexGrow: 1 }}>
                  ABOUT
                </h6>
              </a>
            </div>
            <div className="nav">
              <a
                href="#team"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h6 sx={{ flexGrow: 1 }}>
                  TEAM
                </h6>
              </a>
            </div>
            <div className="nav">
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h6 sx={{ flexGrow: 1 }}>
                  CONTACT
                </h6>
              </a>
            </div>
          </div>
        </div>
        {/* </Toolbar> */}
      </AppBar>
    </Box>
  );
};

export default Navbar;
