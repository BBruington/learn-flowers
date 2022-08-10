import styles from "./nav.module.css";
import Image from "next/dist/client/image";
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {
  const router = useRouter();
  const toLogin = (e) => {
    e.preventDefault();
    router.push('/login')

  }
  const toHome = (e) => {
    e.preventDefault();
    router.push('/')

  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href='/'>
          <a>
            <Image
              src='/icons/happyflower.png' 
              alt='flower logo' 
              width='48px'
              height='35px'
            />
          </a>          
        </Link>
        <ul className={styles.navItems}>
          <li onClick={toHome} className={styles.home}>
            <a>Home</a>
          </li>
          <li onClick={toLogin} className={styles.login}>
            <a>Login</a>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default NavBar;