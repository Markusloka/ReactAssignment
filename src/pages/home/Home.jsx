import { Fragment } from "react";
import Features from "./components/Home.features";
import Hero from "./components/Home.hero";
import Logos from "./components/Home.logos"

function Home() {
  return (
    <Fragment>
      <Hero />
      <Logos />
      <Features />
    </Fragment>
  );
}

export default Home;
