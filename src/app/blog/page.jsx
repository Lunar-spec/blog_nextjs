"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import Loading from './loading'

// export const metadata = {
//     title: 'Blog',
//     description: 'Blog Application',
// }

// const getData = async () => {
//     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`,
//         {
//             cache: "no-store",
//         });

//     if (!res.ok) {
//         console.log('Error: Something went wrong')
//     }
//     return res.json();
// }

const Blog = () => {
    const session = useSession()

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    // console.log(fetcher)
    const { data, mutate, error, isLoading } = useSWR(`api/posts`, fetcher);

    if (session.status === "loading") {
        return <Loading />
    }

    return (
        <div className={styles.mainContainer}>
            {isLoading ?
                <p><Loading /></p>
                :
                data?.map(item => (
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

export default Blog;