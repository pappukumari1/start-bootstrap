import { Button, Container, Typography } from "@mui/material";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

const Banner = () => {
  return (
    <Container maxWidth='xl' className="p-0">
    <div >
      <div style={{ width: "100%" }}>
        <img
          src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg"
          width={"100%"}
        />
        <div className="btn1 " >
          <h2 class="my-5" style={{ fontSize: "40px" }}>
            Welcome To Our Studio!
          </h2>
          <h1 class="my-5" style={{ fontSize: "60px", fontWeight: "bold" }}>
            IT'S NICE TO MEET YOU
          </h1>
          <Button
            class="px-5 py-3 mt-5 btnTell"
            
          >
           
            TELL ME MORE
          </Button>
        </div>
      </div>
    
     
     
   



     


    </div>
    </Container>
  );
};
export default Banner;
