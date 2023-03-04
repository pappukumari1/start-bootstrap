import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

export default function Modals({ open, handleClose, list }) {
  return (
    <Modal
      id="portfolio"
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        position:'absolute',
        margin:'20px',
        // margin:'50px',
        overflowY:'scroll',
        
        // height:'100%',
    
        display:'block',
        
      }}
    >
      <Box className="mx-5 my-1 text-center box">
        <p
          onClick={handleClose}
          className="text-end "
          style={{ marginTop: "350px", fontSize: "50px" }}
        >
          <i class="bi bi-x-lg"></i>
        </p>
        <h1 ClassName=" mb-4 fw-5" style={{ possition: "fixed" }}>
          PROJECT NAME
        </h1>

        <p ClassName="fs-2" style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <img src={list.url} />
        <p ClassName="fs-3 my-5 description">{list.Description}</p>

        <p className="My-2 "> Client:{list.Client}</p>
        <p>Category:{list.Category}</p>
        <Button
          onClick={handleClose}
          className="fs-2 my-4 px-5 py-3 bg-warning text-light"
        >
          {" "}
          <i class="bi bi-x-lg me-2 fs-1"></i>Close Project
        </Button>
      </Box>
    </Modal>
  );
}
