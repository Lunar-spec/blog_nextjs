import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
export const dynamic = 'force-dynamic'

export const metadata = {
    title: 'Blog',
    description: 'Blog Application',
}

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

// const Blog = async () => {

//     const data = await getData();

//     return (
//         <div className={styles.mainContainer}>
//             {data.map(item => (
//                 <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
//                     <div className={styles.imageContainer}>
//                         <Image
//                             src={item.img}
//                             alt={item.title}
//                             width={400}
//                             height={250}
//                             className={styles.image}
//                             loading='lazy'
//                         />
//                     </div>
//                     <div className={styles.content}>
//                         <h1 className={styles.title}>{item.title}</h1>
//                         <p className={styles.desc}>{item.desc}</p>
//                         <span className={styles.username}>By: {item.username}</span>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     )
// }
const Blog = async () => {

    // const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {/* {data.map(item => ( */}
                {/* <Link href={`/blog/${item._id}`} className={styles.container}> */}
                    <div className={styles.imageContainer}>
                        <Image
                            src={'https://images.unsplash.com/photo-1693087399746-82759662bc9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
                            alt={'itemtitle'}
                            width={400}
                            height={250}
                            className={styles.image}
                            loading='lazy'
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Title</h1>
                        <p className={styles.desc}>Desc</p>
                        <span className={styles.username}>By: Me</span>
                    </div>
                {/* </Link> */}
            {/* ))} */}
        </div>
    )
}

export default Blog