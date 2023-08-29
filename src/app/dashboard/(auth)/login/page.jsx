"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import { Eye, EyeOff } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const metadata = {
    title: 'Login',
    description: 'Blog Application',
}

const Login = () => {
    const [view, setView] = useState('password');

    const session = useSession();
    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard")
    }

    const handlePassword = () => {
        view === 'password' ? setView('text') : setView('password')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", { email, password })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' className={styles.input} required />
                <div className={styles.password}>
                    <input type={view} placeholder='Password' className={styles.input} required />
                    {view === 'password' ?
                        (<EyeOff className={styles.iconoff} onClick={handlePassword} />)
                        :
                        (<Eye className={styles.icon} onClick={handlePassword} />)
                    }
                </div>
                <button className={styles.button} type='submit'>Login</button>
            </form>
            <span className={styles.or}>OR</span>
            <button onClick={() => signIn("google")} className={styles.google}>Google</button>
            <Link href={'/dashboard/register'} className={styles.link}>Don&apos;t have an Account? Register</Link>
        </div>
    )
}

export default Login