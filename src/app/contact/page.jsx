import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
    title: 'Contact',
    description: 'Blog Application',
}

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src={'/contact.svg'}
                        alt='contact'
                        fill={true}
                        className={styles.image}
                        priority
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder='Name' className={styles.input} />
                    <input type="email" placeholder='Email' className={styles.input} />
                    <textarea className={styles.textArea} placeholder='Message' cols={60} rows={5} />
                    <Button url={'#'} text={'Send'} />
                </form>
            </div>
        </div>
    )
}

export default Contact