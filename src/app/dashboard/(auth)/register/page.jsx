"use client";
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const metadata = {
    title: 'Register',
    description: 'Blog Application',
}

const Register = () => {
    const [view, setView] = useState('password');
    const handlePassword = () => {
        view === 'password' ? setView('text') : setView('password')
    }

    const [err, setErr] = useState(null)

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        console.log(JSON.stringify({
            name,
            email,
            password
        }))

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            res.status === 201 && router.push('/dashboard/login?success=Account created')
        } catch (error) {
            setErr(error)
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Username'
                    className={styles.input}
                    required
                />
                <input
                    type="email"
                    placeholder='Email'
                    className={styles.input}
                    required
                />
                <div className={styles.password}>
                    <input
                        type={view}
                        placeholder='Password'
                        className={styles.input}
                        required
                    />
                    {view === 'password' ?
                        (<EyeOff className={styles.iconoff} onClick={handlePassword} />)
                        :
                        (<Eye className={styles.icon} onClick={handlePassword} />)
                    }
                </div>
                <button className={styles.button}>Register</button>
                {err && "Something went wrong!"}
            </form>
            <span className={styles.or}>- OR -</span>
            <Link href={'/dashboard/login'} className={styles.link}>
                Login with existing account
            </Link>
        </div>
    )
}

export default Register