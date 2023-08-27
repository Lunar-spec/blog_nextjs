import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({ params }) => {
    // console.log(params)

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button url={'#'} text={'See More'} />
                </div>
                    <div className={styles.imgContainer}>
                        <Image
                            src={'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1945&q=80'}
                            alt='Illustration'
                            fill={true}
                            className={styles.img}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Category