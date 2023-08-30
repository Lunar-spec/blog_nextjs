"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import Loading from '../loading'


// const getData = async (id) => {
//     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`,
//         {
//             cache: "no-store"
//         }
//     );

//     if (!res.ok) {
//         return notFound();
//     }
//     return res.json();
// }

// export async function generateMetadata({ params }) {
//     const post = await getData(params.id)
//     return {
//         title: post.title,
//         description: post.desc,
//     }
// }

const BlogPost = ({ params }) => {
    // console.log(params)
    // const id = params.id;
    // console.log(id)

    const session = useSession()

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    // console.log(fetcher)
    const { data, mutate, error, isLoading } = useSWR(`api/posts/${params.id}`, fetcher);

    if (session.status === "loading") {
        return <Loading />
    }

    if(!data) {
        return notFound();
    }

    console.log(data);
    console.log(error);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>
                        {data.desc}
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={'https://images.unsplash.com/photo-1688001247541-43bbd88f77b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'}
                            alt={data.username}
                            width={50}
                            height={50}
                            className={styles.avatar}
                            loading='lazy'
                        />
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={data.img}
                        alt={data.title}
                        fill={true}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {data.content}
                </p>
            </div>
        </div>
    )
}

export default BlogPost;
