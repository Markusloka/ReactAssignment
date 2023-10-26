import { Fragment } from "react";
import Features from "./components/Home.features";
import Hero from "./components/Home.hero";
import Logos from "./components/Home.logos"
import { About } from "./components/Home.about";

function Home() {
  return (
    <Fragment>
      <Hero />
      <Logos />
      <Features />
      <About/>
    </Fragment>
  );
}

export default Home;
