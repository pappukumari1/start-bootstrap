import React from "react";
import Avatar from '@mui/material/Avatar';

const Footer=()=>{
    return(
        <div className="d-flex justify-content-between p-4" style={{width:"100%"}}>
<div className="pe-5" style={{fontSize:"20px",width:"100%"}}>Copyright © Your Website 2022</div>
<div className="d-flex  gap-3 " >
          <Avatar alt="Remy Sharp"  style={{backgroundColor:"black",width:"50px",height:"50px"}} >
            <i class="bi bi-twitter"></i>
            </Avatar>
          <Avatar alt="Remy Sharp"  style={{backgroundColor:"black" ,width:"50px",height:"50px"}} >
          <p className="pt-3" style={{fontSize:"20px",fontWeight:"bold"}}>f</p> 
            </Avatar>
            
            <Avatar  alt="Remy Sharp"  style={{backgroundColor:"black",width:"50px",height:"50px" }} >
               <p className="pt-3" style={{fontSize:"20px",fontWeight:"bold"}}>in</p> 
            </Avatar>
          </div>
<div className="ps-5" style={{fontSize:"20px",width:"100%"}}>Privacy Policy Terms of Use</div>
        </div>
    )
}
export default Footer;