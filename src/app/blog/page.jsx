import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'Blog',
    description: 'Blog Application',
}

const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/posts`, 
    {
        cache: "no-store"
    });

    if (!res.ok) {
        alert('Something went wrong')
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
                            alt='Camp'
                            width={400}
                            height={250}
                            className={styles.image}
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