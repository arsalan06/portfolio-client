import Image from 'next/image'
import styles from './page.module.css'
import HomePage from './home/page'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
    <HomePage/>
      </div>
      
    </main>
  )
}
