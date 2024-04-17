import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div  className={styles.container1}>
      <Image src="/as.png" alt=""  className={styles.img}  height={50} width={50}/><Link href="/" className={styles.logo}> VITgram</Link>
      </div>
     
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar