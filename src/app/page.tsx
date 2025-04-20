import style from "./main.module.css";
import pageStyle from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Break from "./components/break/break";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Project from "./components/project/project";
import Skill from "./components/skill/skill";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <>
    <div className={style.navbar}>
      <Navbar/>
    </div>

    <div className={style.content}>
      <div className={style.hero}>
        <Hero/>
      </div>
      <div className={style.break}>
        <Break/>
      </div>
      <div className={style.about} id={"about"}>
        <About/>
      </div>
      <div className={style.project}>
        <Project/>
      </div>
      <div className={style.skill}>
        <Skill/>
      </div>
      <div className={style.contact}>
        <Contact/>
      </div>
    </div>

    </>
  );
}
