import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "VITgram",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About VITgram Clubs and Chapters</h2>
        <h1 className={styles.title}>
         Student lead Clubs and Chapter
        </h1>
        <p className={styles.desc}>
          The clubs here at VIT suits everyone’s enthusiasms and fits everyone
          on campus. VIT is enhanced with many such clubs. These clubs help
          students cultivate leadership and team-building skills. These clubs
          are responsible for the never-ending stream of liveliness and events
          that happen in our college. Name technical, artistic,
          research-oriented or public speaking, everything and everyone is
          satisfied here.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>50+</h1>
            <p>Number of Clubs</p>
          </div>
          <div className={styles.box}>
            <h1>50+</h1>
            <p>Number of Chapters</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Vitians joined in active clubs</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/al.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
