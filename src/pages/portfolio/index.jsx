import { Button, Container } from "@mui/material";
import { useState } from "react";
import "./index.css";
import Modals from "./viewPage";
const data = [
  {
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
    Client: "Threads",
    Category: "Illustration",
    Description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
    Client: "Explore",
    Category: "Graphic Design",
    Description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
    Client: "Finish ",
    Category: "Identity",
    Description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
    Client: "Lines",
    Category: "Branding",
    Description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
    Client: "Southwest",
    Category: " Website Design",
    Description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg",
    Client: "Window",
    Category: "Photography",
    Description:
      "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
];
const PortFolio = () => {
 
  const [open, setOpen] = useState(false);
  const [currentList, setCurrentList] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container id="portfolio">
      <div style={{paddingTop: "40px" }}>
        <h1 className="pb-2 pt-5">PORTFOLIO</h1>
        <p className="pb-4" style={{ fontSize: "19px" }}>
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div style={{marginTop:"70px"}} >
          <Modals open={open} handleClose={handleClose} list={currentList} />
          </div>
          {data.map((list,index) => {
            return (
              <div key={index} className=" col-sm my-4">
                <div
                 className="div12"
                
                >
                  <div className="card-body">
                    <div
                      className="container1 cursor-pointer"
                      onClick={() => {
                        setCurrentList(list);
                        handleOpen();
                      }}
                    >
                      <img
                        className="mb-3 image"
                        style={{ maxWidth: "100%" }}
                        src={list.url}
                      />

                      <div className=" overlay ">
                        <div cla7ss=" text ">
                          <h1 className="h1">+</h1>
                        </div>
                      </div>
                    </div>
                    <h4 className="my-2">{list.Client}</h4>
                    <p className="mb-3" style={{ fontSize: "19px" }}>
                      {list.Category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default PortFolio;
