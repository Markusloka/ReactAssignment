import { Fragment } from "react";
import { Card } from "./Card";
import Email from "../../../assets/contact/Emailicon.svg";
import Phone from "../../../assets/contact/Phoneicon.svg";
import Visit from "../../../assets/contact/Visiticon.svg";
import "./style.cards.css";

export function Cards() {
  return (
    <Fragment>
      <Cards>
        <Card
          //   img={Visit}
          title="Visit us"
          sub1="Sveavägen 31"
          sub2="111 34 STOCKHOLM"
        />
        <Card
          //   img={Phone}
          title="Call us"
          sub1="+46 (8) 121 470 50 "
          sub2="+46 (8) 121 470 51"
        />
        <Card
          //   img={Email}
          title="Email us"
          sub1="info@crito.com "
          sub2="support@crito.com"
        />
      </Cards>
    </Fragment>
  );
}
