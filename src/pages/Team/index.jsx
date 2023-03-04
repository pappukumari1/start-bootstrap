import React from "react";
import Avatar from '@mui/material/Avatar';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "@mui/material";
import "./index.css";
const Team=()=>{
    const data = [
        {
          url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/1.jpg",
          title: "Parveen Anand ",
          description:
            " Lead Designer",
        },
        {
          url:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/2.jpg",
          title: "Diana Petersen ",
          description:
            "Lead Marketer",
        },
        {
          url: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg",
          title: "Larry Parker",
          description:
            "Lead Devloper",
        },
      ];
    return(
      <Container maxWidth="xl" className="p-0" id="team" style={ {backgroundColor:"#fbf4f4"}}>
        <div class="mx-5" style={{padding:"75px"}} >
      <h1 class="pb-3">OUR AMAZING TEAM</h1>
      <p class="pb-5 " style={{fontSize:"19px"}}>Lorem ipsum dolor sit amet consectetur.</p>
      <div class="d-flex justify-content-between">
{data.map((list,index)=>{
    return(
        <div key={index} class=" " style={{ width: "23rem"}}>
        <div class="card-body">
            {/* <img src={list.url}/> */}
            
        <Avatar className="avt" alt="Remy Sharp"  style={{width:"220px",height:"220px",backgroundColor:"yellow"}} ><img src={list.url} width={"210px"} height={"210px"}/>
            </Avatar>
       
          <h3 class="card-title ">{list.title}</h3>
          <p class="card-subtitle mb-2 text-muted my-3" style={{fontSize:"19px"}}>{list.description}</p>
         
          <div className="d-flex my-5 gap-3 justify-content-center" >
    
          <Avatar 
           style={{backgroundColor:"black",width:"50px",height:"50px" }} alt="Remy Sharp"  >
            <i class="bi bi-twitter"></i>
            </Avatar>
  
          <Avatar 
           style={{backgroundColor:"black",width:"50px",height:"50px" }} alt="Remy Sharp"   >
          <p className="pt-3 p1" >f</p> 
            </Avatar>
            

            <Avatar 
             style={{backgroundColor:"black",width:"50px",height:"50px" }} alt="Remy Sharp"   >
               <p className="pt-3 p1"  >in</p> 
            </Avatar>
          </div>


        </div>
      </div>
    )
})}

      
      </div>
      <div className="d-flex justify-content-center m-5 fs-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos<br/>
     non quis ad perspiciatis, totam corporis ea, alias ut unde.</div>
    </div>
    </Container>
    )
}
export default Team;