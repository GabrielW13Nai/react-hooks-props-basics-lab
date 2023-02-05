import React from "react";
import user from "../data/user.js";


function User(prop){
  return (
  <div>
    <h1 style={{ color: prop.color }}>
        {prop.name} is a Web Developer from {prop.city}
  </h1>
  </div>
)}


function Home() {
  return (
    <div id="home">
     <User name={user.name} color={user.color} city={user.city} />
    </div>
  );
}

export default Home;
