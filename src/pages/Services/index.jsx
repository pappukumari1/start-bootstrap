import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "@mui/system";
import "./index.css";
const Services = () => {
  const data = [
    {
      url: (<i class="bi bi-cart-fill sizes"></i>),
      title: "E-Commerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. ",
    },
    {
      url:(<i class="bi bi-laptop sizes"  ></i>),
      title: "Responsive Design ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
      url: (<i class="bi bi-lock-fill sizes"    ></i>),
      title: "Web Security",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. ",
    },
  ];
  return (
    <Container id="services">
    <div class=" " style={{padding:"75px"}}>
      <h1 class="pb-3">SERVICES</h1>
      <p class="pb-5 " style={{fontSize:"19px"}}>Lorem ipsum dolor sit amet consectetur.</p>
      <div class="d-flex justify-content-between gap-5" >
{data.map((list,index)=>{
    return(
        <div key={index} class=" " style={{ width: "23rem"}}>
        <div class="card-body" >
            {/* <img src={list.url}/> */}
            
        <Avatar className="" alt="Remy Sharp"  style={{marginBottom:"18px",marginLeft:"70px",width:"140px",height:"140px",backgroundColor:"#fbae01"}} >{list.url}
            </Avatar>
       
          <h3 class="card-title ">{list.title}</h3>
          <p class="card-subtitle mb-2 text-muted my-3" style={{fontSize:"19px"}}>{list.description}</p>
         
        </div>
      </div>
    )
})}
      
      </div>
    </div>
    </Container>
  );
};
export default Services;
