import React from "react";
import "./style.message.css";
import { Form } from "./Form";
export function Message() {
  return (
    <div className="body">
      <div className="messagingBody">
        <h1 className="messagingTitle">
          Leave us a message for any information.
        </h1>
        <Form />
      </div>
    </div>
  );
}
