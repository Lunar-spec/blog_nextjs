"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Delete } from 'lucide-react'

export const metadata = {
    title: 'Dashboard',
    description: 'Blog Application',
}

const Dashboard = () => {
    const session = useSession()
    const router = useRouter();

    // const [data, setData] = useState([])
    // const [error, setError] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
    //             // {
    //             //     next: { revalidate: 10 } //// fetching data every 10 seconds
    //             // }
    //             {
    //                 cache: "no-store"
    //             }
    //             //// fetch data in every request
    //         );

    //         if (!res.ok) {
    //             setError(true)
    //         }
    //         const data = await res.json();
    //         setData(data);
    //         setIsLoading(false);
    //     };

    //     getData();
    // }, []);
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, mutate, error, isLoading } = useSWR(`api/posts?username=${session?.data?.user.name}`, fetcher);

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    // console.log(session)


    // console.log(data)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;

        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc,
                    img,
                    content,
                    username: session.data.user.name,
                })
            })
            mutate();
            e.target.reset();
        } catch (error) {
            alert('Something went wrong try again later.')
            // console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`api/posts/${id}`, {
                method: "DELETE",
            })
            mutate();
        } catch (error) {
            console.log(error)
        }
    }

    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {isLoading ?
                        <p>Loading...</p>
                        :
                        data?.map((post) => (
                            <div className={styles.post} key={post._id}>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        className={styles.img}
                                        width={200} height={100}
                                    />
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <div>
                                    <Delete className={styles.delete} onClick={() => handleDelete(post._id)} />
                                </div>
                            </div>
                        ))}
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                    <h1 className={styles.mainHeading}>Add a New Post</h1>
                    <input type="text" placeholder='Title' className={styles.input} />
                    <input type="text" placeholder='Description' className={styles.input} />
                    <input type="text" placeholder='Image URL' className={styles.input} />
                    <textarea type="text" cols={30} rows={10} placeholder='Content' className={styles.textArea} />
                    <button type="submit" className={styles.button}>Add Post</button>
                </form>
            </div>
        )
    }
}

export default Dashboard