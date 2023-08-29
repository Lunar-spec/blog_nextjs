import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/Discussion.svg'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Write for everyone.</h1>
        <p className={styles.desc}>Turning your thoughts into words for everyone to share.</p>
        <Button url='/portfolio' text='See our Works'/>
      </div>
      <div className={styles.item}>
        <Image src={hero} className={styles.img} alt='Hero' height={'auto'} width={'auto'} priority style={{ width: 'auto', height: 'auto' }}/>
      </div>
    </div>
  )
}
