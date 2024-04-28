import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import Image from "next/image";
import AudioPlayer from "@/components/audio/AudioPlayer";
const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div  className={styles.container1}>
      <AudioPlayer/>
      {/* <Image src="/as.png" alt=""  className={styles.img}  height={50} width={50}/><Link href="/" className={styles.logo}> VITgram</Link> */}
      <a href="/"><p className={styles.logo}>VITgram</p></a>
      </div>
     
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar