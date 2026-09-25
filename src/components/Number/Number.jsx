import styles from "./Number.module.css";
import * as CountUpModule from "react-countup";
// Vite 8 (Rolldown) CJS/ESM interop: react-countup is CJS-only, so the
// default import can resolve to a wrapped module object (possibly nested,
// e.g. { default: { default: CountUp } }) instead of the component itself.
// Unwrap until we hit an actual function/class component.
function resolveDefault(mod) {
  let m = mod;
  while (m && typeof m !== "function" && m.default) {
    m = m.default;
  }
  return m;
}
const CountUp = resolveDefault(CountUpModule);
import { useInView } from "react-intersection-observer";

function NumberItem({ end, label }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // ตรวจจับครั้งเดียว
    threshold: 0.1, // ปรากฏ 10% ขึ้นไปถึงจะนับว่า visible
  });

  return (
    <div className={styles.number_items}>
      <h3>
        <div ref={ref}>
          {inView ? <CountUp start={0} end={end} duration={5} /> : null} +
        </div>
      </h3>
      <p>{label}</p>
    </div>
  );
}

function Number() {
  const items = [
    { end: 6, label: "Portfolio Entries" },
    { end: 5, label: "Skills Explored" },
    { end: 6, label: "React Components" },
    { end: 1, label: "Portfolio Website" },
  ];

  return (
    <div className={styles.number_con}>
      {items.map((item) => (
        <NumberItem key={item.label} end={item.end} label={item.label} />
      ))}
    </div>
  );
}

export default Number;
