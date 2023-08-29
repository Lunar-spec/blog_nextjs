"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

export const metadata = {
    title: 'Login',
    description: 'Blog Application',
}

const Login = () => {
    return (
        <div className={styles.container}>
            <button onClick={() => signIn("google")}>Login With Google</button>
        </div>
    )
}

export default Login