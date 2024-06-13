import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import TechStack from "./components/techStack/TechStack";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainHeaderDiv}>
        <Header />
      </div>
    </main>
  );
}
