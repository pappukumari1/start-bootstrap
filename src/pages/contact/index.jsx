import { Button, Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./index.css";
const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const [data ,setData]=useState([]);
  const onSubmit=(value)=>{
console.log("value",value);
    setData([...data,value])
    console.log("data",data);
  }
  return (
    <Container maxWidth='xl' className="p-0">
    
    <div id="contact"
      className="bg-dark py-5"
      style={{
        backgroundImage:
          "url(https://startbootstrap.github.io/startbootstrap-agency/assets/img/map-image.png)",
      }}
    >
      <div className="m-5" style={{ color: "white" }}>
        <h1 className="m-3 fw-bold ">CONTACT US</h1>
        <p className="fs-4" style={{ color: "grey" }}>
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex m-5 px-5 gap-5">
       
        <div className="d-flex flex-column col-md-6 gap-5 ms-5">
          <input
            type={"text"}
            placeholder=" Your Name *"
            {...register("name")}
          className="input"
          />
          <input 
                    className="input"
            type={"text"}
            placeholder=" Your Email *"
            {...register("email")}
           
          />
          <input
                    className="input"
            type={"text"}
            placeholder=" Your Phone *"
            {...register("phone")}

          />
        </div>
        <div className="d-flex flex-column col-md-6 me-5">
          <textarea
          className="textarea"
            id="w3review"
            placeholder=" Your Message *"
            {...register("message")}
            name="w3review"
            rows="9"
             cols="50"
          
          />
        </div>

       
      </div>
     <Button type="submit" 
        className="px-5 py-3 mt-3 mb-5 btn10"
        style={{ backgroundColor: "#ffc800", color: "white", fontSize: "25px" }}
      >
        SEND MESSAGE
        </Button>
      </form>


    </div>
    </Container>
  );
};
export default Contact;
