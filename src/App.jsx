import { lazy, Suspense } from "react";
import "./App.css";
import "motion-components/motion-typewriter";
import avatar from "./assets/images/avatar.png";
import ScrollStack, {
  ScrollStackItem,
} from "./components/ScrollStack/ScrollStack";

import cardImg from "./assets/images/imdb1.png";
import cardImg2 from "./assets/images/imdb2.png";
import cardImg3 from "./assets/images/imdb3.png";
import epic1 from "./assets/images/epic1.png";
import epic2 from "./assets/images/epic2.png";
import epic3 from "./assets/images/epic3.png";
import digikala1 from "./assets/images/digikala1.png";
import digikala2 from "./assets/images/digikala2.png";
import digikala3 from "./assets/images/digikala3.png";

const ColorBends = lazy(() => import("./components/ColorBends/ColorBends"));
import SpecularButton from "./components/SpecularButton/SpecularButton";

const App = () => {
  return (
    <>
      {/* Fixed animated background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Suspense fallback={null}>
          <ColorBends
            colors={["#e9002b", "#8a5cff", "#070707"]}
            rotation={101}
            speed={0.2}
            scale={0.6}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
          />
        </Suspense>
      </div>

      {/* Your content on top */}
      <div className="content-layer">
        <nav>
          <div className="topside">
            <ul className="nav-Lists">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Socials</a>
              </li>
            </ul>
          </div>
          <img className="main-avatar" src={avatar} alt="" />
        </nav>
        <main>
          <div className="mainWelcomeDiv">
            <motion-typewriter className="topWelcome" interval="0.05" loop>
              <p>HI,I'M MAHDI!</p>
            </motion-typewriter>
            <div className="mainAvatar">
              <div className="about-me">
                <p>
                  I am a creative and passionate Full-Stack Web Developer with
                  experience in building modern, responsive, and dynamic web
                  applications. I work with technologies such as JavaScript,
                  React, HTML, CSS, PHP, and Node.js, allowing me to develop
                  both front-end and back-end solutions.
                </p>
              </div>

              <div className="Contact-button">
                <SpecularButton
                  size="lg"
                  radius={40}
                  tint="#ffffff"
                  tintOpacity={0.04}
                  textColor="#f5f5f5"
                  lineColor="#ffffff"
                  baseColor="#525252"
                  intensity={1.05}
                  idleIntensity={0.45}
                  shineSize={10}
                  shineFade={34}
                  thickness={1.5}
                  glow={1}
                  followMouse
                  proximity={250}
                  onClick={() => console.log("clicked")}
                >
                  Contact Me
                </SpecularButton>
              </div>
            </div>
          </div>
        </main>
        <div className="AboutMe-Texts">
          <p className="abt-top-title">ABOUT ME</p>
          <p className="abt-description">
            I'm a creative and passionate Full-Stack Web Developer specializing
            in building modern, responsive, and user-friendly web applications.
            I work with React, JavaScript, HTML, CSS, PHP, Node.js, and REST
            APIs to turn ideas into functional digital experiences. Beyond
            coding, I'm a kind, supportive, and collaborative team player who
            enjoys sharing knowledge, solving problems, and learning new
            technologies. I believe creativity, teamwork, and continuous growth
            are the keys to building great things.
          </p>
          <div className="abt-contact">
            <SpecularButton
              size="lg"
              radius={40}
              tint="#ffffff"
              tintOpacity={0.04}
              textColor="#f5f5f5"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1.05}
              idleIntensity={0.45}
              shineSize={10}
              shineFade={34}
              thickness={1.5}
              glow={1}
              followMouse
              proximity={250}
              onClick={() => console.log("clicked")}
            >
              Contact Me
            </SpecularButton>
          </div>
        </div>
        <div className="projects">
          <div style={{ height: 600 }}>
            <ScrollStack useWindowScroll>
              <ScrollStackItem>
                <div className="top-side-card">
                  <p className="cardNum">01</p>
                  <a href="https://mahdi-motie.github.io/IMDb-sample/index.html">
                    Live Demo
                  </a>
                </div>
                <div className="card-images">
                  <div className="leftside">
                    <img src={cardImg} alt="" />
                  </div>
                  <div className="rightside">
                    <img src={cardImg2} alt="" />
                    <img src={cardImg3} alt="" />
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className="top-side-card">
                  <p className="cardNum">02</p>
                  <a href="https://mahdi-motie.github.io/IMDb-sample/index.html">
                    Live Demo
                  </a>
                </div>
                <div className="card-images">
                  <div className="leftside">
                    <img src={epic1} alt="" />
                  </div>
                  <div className="rightside">
                    <img src={epic2} alt="" />
                    <img src={epic3} alt="" />
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className="top-side-card">
                  <p className="cardNum">03</p>
                  <a href="https://mahdi-motie.github.io/IMDb-sample/index.html">
                    Live Demo
                  </a>
                </div>
                <div className="card-images">
                  <div className="leftside">
                    <img src={digikala1} alt="" />
                  </div>
                  <div className="rightside">
                    <img src={digikala2} alt="" />
                    <img src={digikala3} alt="" />
                  </div>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
