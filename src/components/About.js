import React from "react";
import user from "../data/user.js";

let userdata = [];
userdata.push(user);

function UserResponse(props){
  return <div>
   <p>{props.bio}</p>
  </div>
  
}

function  RejectedResponse(prop){
  return <div>
    <p style={{display: 'none'}}>""</p>
  </div>
  
}

function Link(details){
  return(
  <div id="linkinfo">
      <h3>Links</h3>
      <a href="gitprofile" >{details.github}</a>
      <a href="linkedprofile" >{details.linkedin}</a>
  </div>
  

  )
  
  
}


function About(){

  return (
    <div id="about">
      <h2>About Me</h2>
      <div>
      {typeof userdata.forEach(info => info.bio) === "string"}{
        <UserResponse bio={user.bio}/>
      } 
      <RejectedResponse bio={user.bio}/>
      
      </div>
  
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Link github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}
 


export default About;

