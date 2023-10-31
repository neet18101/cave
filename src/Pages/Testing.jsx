import React from "react";
import "./Testing.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BorderColor } from "@mui/icons-material";

const Testing = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="hero">
        <nav>
          <img src="/icons/vector.svg" className="menu-img" alt="" />
          <img src="/icons/brand.svg" className="logo" alt="" />
          <a href="" className="logoName">
            BachelorsCave
          </a>
          <div className="rightSide">
            <form action="" className="innerRightSide">
              <img src="/icons/vector1.svg" alt="" srcset="" />
            </form>
            <div className="innerRightSide">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{ color: "#fff" }}
              >
                I’m an owner <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                style={{ color: "#ff" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem> */}
              </Menu>
              <Button
                variant="outlined"
                style={{
                  color: "#fff",
                  borderColor: "#fff",
                  padding: "0px 15px",
                  textTransform: "capitalize",
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </nav>
      </div>
      {/* <div className="hero-child" /> */}
      <div className="home-container">
        <div className="hero-item" />
        <div className="hero-inner" />

        <div className="discover-a-place-container">
          <h1 className="discover-a-place">
            Discover a place <br />
            you will love to live
          </h1>
          <span className="connect">Connect with more than 75K renters looking for new homes using our comprehensive marketing platform.</span>
        </div>
      </div>
    </>
  );
};

export default Testing;
    