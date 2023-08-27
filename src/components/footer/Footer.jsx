import React from 'react'
import styles from './footer.module.css'
import { Twitter, Youtube,Facebook, Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Arctic CicaDa. All rights reserved</div>
            <div className={styles.social}>
                <Facebook  strokeWidth={1} className={styles.icon}/>
                <Instagram  strokeWidth={1} className={styles.icon}/>
                <Twitter  strokeWidth={1} className={styles.icon}/>
                <Youtube  strokeWidth={1} className={styles.icon}/>
            </div>
        </div>
    )
}

export default Footer