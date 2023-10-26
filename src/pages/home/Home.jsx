import { Fragment } from "react";
import Features from "./components/Home.features";
import Hero from "./components/Home.hero";

function Home() {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
}

export default Home;
