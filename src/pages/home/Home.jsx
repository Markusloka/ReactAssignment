import { Fragment } from "react";
import Features from "./components/Home.features";
import Hero from "./components/Home.hero";
import Logos from "./components/Home.logos";
import { About } from "./components/Home.about";
import { Services } from "./components/Home.service";
import { Choose } from "./components/Home.choose";
import { Projects } from "./components/Home.projects";

function Home() {
  return (
    <Fragment>
      <Hero />
      <Logos />
      <Features />
      <About />
      <Services />
      <Choose />
      <Projects />
    </Fragment>
  );
}

export default Home;
