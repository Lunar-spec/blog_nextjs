import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
    title: 'About',
    description: 'Blog Application',
}

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.unsplash.com/photo-1627634777217-c864268db30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="about"
                    fill={true}
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>
                        Writing with passion and experiences
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}> Who are we?</h1>
                    <p className={styles.desc}>
                        Welcome to our vibrant corner of the digital world. We&apos;re a
                        community of passionate individuals brought together by our shared
                        love for exploration and discovery. Our team is fueled by
                        creativity, collaboration, and a collective commitment to delivering
                        valuable insights that ignite conversations and inspire growth.
                        <br />
                        <br />
                        At our core, we&apos;re storytellers, weaving narratives that
                        resonate with diverse perspectives. Through our words, we seek to
                        bridge gaps, connect minds, and create a space where everyone&apos;s
                        voice can be heard. With a blend of expertise and enthusiasm,
                        we&apos;re more than a team - we&apos;re a community fostering
                        connections in the digital realm.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}> What we do?</h1>
                    <p className={styles.desc}>
                        From thought-provoking analyses to practical guides, we curate
                        content that empowers you to navigate the ever-evolving landscape of
                        ideas. Our journey is marked by a commitment to intellectual growth
                        and the joy of discovery. Together, we embark on a quest to unlock
                        the potential of shared knowledge and create a brighter digital
                        future.
                        <br />
                        <br />
                        -Words that Transcend
                    </p>
                    <Button url={"/contact"} text={"Connect"} className={styles.button} />
                </div>
            </div>
        </div>
    );
};

export default About;
