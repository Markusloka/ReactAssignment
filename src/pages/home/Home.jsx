import { Fragment } from "react";
import Features from "./components/Home.features";
import Hero from "./components/Home.hero";
import Logos from "./components/Home.logos";
import { About } from "./components/Home.about";
import { Services } from "./components/Home.service";
import { Choose } from "./components/Home.choose";
import { Projects } from "./components/Home.projects";
import { Team } from "./components/Home.team";
import { Blog } from "./components/Home.blog";
import { News } from "./components/Home.News";

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
      <Team />
      <Blog />
      <News />
    </Fragment>
  );
}

export default Home;
