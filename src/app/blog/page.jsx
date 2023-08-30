import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'Blog',
    description: 'Blog Application',
}

const getData = async () => {

    const baseURL =`http://localhost:3000` ||  process.env.NEXTAUTH_URL

    const res = await fetch(`${baseURL}/api/posts`);

    if (!res.ok) {
        console.log('Error: Something went wrong')
    }
    return res.json();
}

const Blog = async () => {
    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data.map(item => (
                <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={250}
                            className={styles.image}
                            loading='lazy'
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <span className={styles.username}>By: {item.username}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog