import React from "react";
import { API } from "aws-amplify";
import "./Home.css";
import { useAppContext } from "../libs/contextLib";

export default function Home() {

  const { userHasAuthenticated } = useAppContext();

  function hello() {
    console.log("userHasAuthenticated is",userHasAuthenticated);
    if(userHasAuthenticated){

      API.get("notes", "/hello").then(response => {
        console.log("response =>",response);
      })
      .catch(error => {
        console.log(error.response);
     });

    }
    
  }

  return (
    
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
        <button onClick={hello}>call function</button>
      </div>
    </div>
  );

}