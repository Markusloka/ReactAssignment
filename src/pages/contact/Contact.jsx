import { Fragment } from "react";
import { Breadcrum } from "./components/Contact.breadcrum";
import { Cards } from "./components/Contact.cards";
import MapComponent from "./components/Contact.maps";
import { Message } from "./components/Contact.message";

export function Contact() {
  return (
    <Fragment>
      <Breadcrum />
      <Cards />
      <Message />
      <MapComponent />
    </Fragment>
  );
}
