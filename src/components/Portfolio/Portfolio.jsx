import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div id="portfolio" className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85"
              alt="coding"
            />
          </Tilt>
          <p>My Portfolio</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=85"
              alt="coding"
            />
          </Tilt>
          <p>Dashboard Concept</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=85"
              alt="coding"
            />
          </Tilt>
          <p>Team Workspace Concept</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=85"
              alt="coding"
            />
          </Tilt>
          <p>Coding Practice</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=85"
              alt="coding"
            />
          </Tilt>
          <p>Collaboration Concept</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=85"
              alt="coding"
            />
          </Tilt>
          <p>Planning Concept</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
