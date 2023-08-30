import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
    const data = items[cat]

    if (data) {
        return data
    }
    return notFound();
}

export async function generateMetadata({params}) {
    return {
        title: params.category,
    }
}


const Category = ({ params }) => {
    // console.log(params)
    const data = getData(params.category)
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            {data.map(item => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <Button url={'#'} text={'See More'} />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill={true}
                            sizes='400'
                            loading='lazy'
                            className={styles.img}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Category