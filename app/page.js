
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      <div className="head1">
        <h1>Hello from first tread with next.js</h1>
      </div>
      <div className={styles.head1}>
        <h1>Hello from first tread with next.js</h1>
      </div>
    </>
  );
}
