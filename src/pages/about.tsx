import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import images from "../../public/images";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = (): ReactElement => {
    return (
        <div className={styles.aboutPageBody}>
            <div className={styles.lhs}>
                <h3>About Andrew Godwin</h3>
                <div className={styles.lhs__bodyContent}>
                    <p>Andrew is called to bring God&apos;s divine presence to worshipers and to those
                        who would dare to praise Him in every nation of the world and to use music
                        to build an unforgettable intimate fellowship between believers and God as
                        well ministration to the unsaved.
                    </p>
                    <p>Andrew is called to raise a sect of worshipers who will worship God in spirit
                        and in truth with the understanding that God delights in them and inhabits
                        their praises.
                    </p>
                    <p>My focus is to invite the presence of God through music to its listeners.
                        Through the wordings of my songs, the word of God will come alive in my
                        listeners spirit and compel them to offer sanctified sacrifices of praise
                        to God  through the calves of their lips.
                    </p>
                    <p>Andrew Godwin believes that God has raised him up through His word and His Spirit
                        to believe in the divine life that Christ brought to us (Titus 1:2-3; 2 Peter 1:3-4)
                        Through my faith in His Word, I have come to experience the kingdom&apos;s reality of divine life.
                    </p>
                    <p>The life in its attributes includes: Righteousness, Prosperity, Success, Abundance, Victory, Divine
                        Health and Communicating The Very Life and Presence of JESUS CHRIST to the nations of the earth through music.
                    </p>
                    <p>This I do through  my spirit inspired lyrics of my songs; which are God&apos;s word declared through singing;
                        everyone intentionally making these confessions through songs by faith will be delivered out of darkness,
                        bondage, poverty, healing from sickness and  be launched enjoy the glorious liberty of the sons of God.
                    </p>
                    <p><span>ABOUT Andrew Godwin&apos;s MINISTRY</span>
                        The Revelatory Generation Music ministry is an international, non -denominational organization established
                        for the sole purpose of bringing God&apos;s divine presence to worshipers and those who would dare to praise
                        Him in every nation of the world. To use music to build an unforgettable intimate fellowship between
                        believers and God as well ministration to the unsaved.
                    </p>
                    <p>Andrew&apos;s ultimate desire is to develop, learn and worship as the Lord anoints and uses him.
                        My core objective is kingdom soul winning, and my desire, is to lead people to the feet of Jesus
                        through seasoned and inspirational songs to where they can find salvation. 1 Corinthians 10:31.
                    </p>
                </div>
            </div>
            <div className={styles.rhs}>
                <div className={styles.rhs__image}>
                    <Image src={images.andrew} alt="Andrew Godwin" />
                </div>
            </div>
        </div>
    );
}

export default About;