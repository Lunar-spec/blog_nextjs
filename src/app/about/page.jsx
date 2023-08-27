import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
                        aliquid vero quaerat laborum debitis fugiat mollitia voluptates
                        aliquam cum, at dolor, fugit sed provident saepe! Expedita molestiae
                        maxime nostrum culpa?
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
                        aliquid vero quaerat laborum debitis fugiat mollitia voluptates
                        aliquam cum, at dolor, fugit sed provident saepe! Expedita molestiae
                        maxime nostrum culpa?
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}> What we do?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
                        aliquid vero quaerat laborum debitis fugiat mollitia voluptates
                        aliquam cum, at dolor, fugit sed provident saepe! Expedita molestiae
                        maxime nostrum culpa?
                        <br />
                        <br />
                        -us sides contain though guide might wagon 
                        <br/><br/>
                        -knowledge ruler bell asleep lack solve 
                    </p>
                    <Button url={"/contact"} text={"Connect"} className={styles.button}/>
                </div>
            </div>
        </div>
    );
};

export default About;
