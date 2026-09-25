import styles from "./Hero.module.css";
import { FaGithub, FaEnvelope, FaCode } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div id="home" className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it's me</p>
            <h3 className={styles.text_2}>Chayawat</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "10px" }}>I'm a</span>
              <TypeAnimation
                sequence={["Front-end Developer", 1000, "Web Developer", 1000]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              I enjoy building websites and learning new technologies. <br />
              Welcome to my portfolio and my web development journey.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/Maxhub05" aria-label="GitHub" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="mailto:chayawat.s@ku.th" aria-label="Email Chayawat">
                  <FaEnvelope />
                </a>
              </li>
              <li>
                <a href="https://github.com/Maxhub05/Portfolio" aria-label="Portfolio source code" target="_blank" rel="noreferrer">
                  <FaCode />
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img} role="img" aria-label="Laptop in a creative workspace"></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
