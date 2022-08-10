import styles from '../styles/Home.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
       <title>Learn Plants</title>
      </Head>

      <div> This is the Home page </div>
      
    </div>
  )
}
