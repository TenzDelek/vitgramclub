import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";


const Home = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.textContainer}>
        <h1 className={styles.title}><span className={styles.cc}>VITgram</span> Clubs and Chapters</h1>
        <p className={styles.desc}>
          A Sub page for Clubs and Chapters showing the culture of VIT. Diverse ranges of clubs
          and chapter from Animation to Robotics. A subsidies site of
          VITgram
        </p>
        <div className={styles.buttons}>
         <Link href="/about"><button className={styles.button}>Learn More</button></Link> 
         <button className={styles.button}><Link href="/blog">Clubs </Link></button>
        </div>
        <div className={styles.brands}>
          <Image src="/bran.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/11.png" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
