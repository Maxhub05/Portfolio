import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled);
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#home">Chayawat Suporn</a>
          </div>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className={styles.button}>
            <a href="mailto:chayawat.s@ku.th">Hire Me</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <button type="button" className={styles.bars} onClick={handleToggle} aria-label="Toggle menu" aria-expanded={isToggled}><FaBars /></button>
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu} onClick={() => setToggle(false)}>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="mailto:chayawat.s@ku.th">Hire Me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
