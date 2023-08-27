import React from 'react'
import styles from './footer.module.css'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 CicaDa. All rights reserved</div>
            <div className={styles.social}>
                <FaFacebook className={styles.icon}/>
                <FaInstagram className={styles.icon}/>
                <FaTwitter className={styles.icon}/>
                <FaYoutube className={styles.icon}/>
            </div>
        </div>
    )
}

export default Footer