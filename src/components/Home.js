import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
      <img src={props.image} alt="User" />
    </div>
  );
}

export default Home;
