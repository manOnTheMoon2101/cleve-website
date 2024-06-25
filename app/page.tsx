import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import TechStack from "./components/techStack/TechStack";
import Welcome from "./components/body/welcome/Welcome";
import Projects from "./components/body/projects/Projects";

export default function Home() {
  return (
    <main className="m-1" >
      <div className="m-1 flex flex-col items-center justify-center min-h-screen">
        <Header />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <Projects/>
      </div>
    </main>
  );
}
