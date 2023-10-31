import React from "react";
import "./style.message.css"
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg"
export function Message() {
  return(
    <div className="body">
    <div className="messagingBody">
      <h1 className="messagingTitle">Leave us a message for any information.
      </h1>
      <form className="messagingForm">
        <input className="Name"></input>
        <input className="Email"></input>
        <input className="Message"></input>
      </form>
      <button className="sendButton">Send Message <img src={ArrowUp}/></button>
    </div>
    </div>
  )
}
