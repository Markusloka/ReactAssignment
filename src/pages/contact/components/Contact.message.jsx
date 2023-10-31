import React from "react";
import "./style.message.css";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";
export function Message() {
  return (
    <div className="body">
      <div className="messagingBody">
        <h1 className="messagingTitle">
          Leave us a message for any information.
        </h1>
        <form className="messagingForm">
          <input
            className="Name"
            type="text"
            name="name"
            placeholder="Namn"
          ></input>
          <input
            className="Email"
            type="email"
            name="email"
            placeholder="Epost-adress"
          ></input>
          <input
            className="Message"
            type="text"
            name="message"
            placeholder="Skriv ditt meddelande"
          ></input>
        </form>
        <button className="sendButton">
          Send Message <img src={ArrowUp} />
        </button>
      </div>
    </div>
  );
}
