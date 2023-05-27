import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import styles from '../src/styles/Home.module.scss';
import { musics } from "../constants/musics";
import images from "../public/images";
import { PauseIcon, PlayIcon } from "./SVGs/SVGicons";
import React from "react";

interface FullEventsSectionProps {

}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const FullEventsSection: FunctionComponent<FullEventsSectionProps> = (): ReactElement => {

    const moreInfoSectionRef = useRef<HTMLDivElement>(null);

    const futureDate = new Date('2023-07-29T00:00:00');

    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(futureDate) - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const { days, hours, minutes, seconds } = timeLeft;

    const [isPlaying, setIsPlaying] = useState(false);


    return (

        <div className={styles.fullEventsSection}>
            <span className={styles.blurredArea}></span>
            <span className={styles.blurredArea}></span>
            <div className={styles.eventAlertContainer}>
                <div className={styles.eventAlertContainer__topArea}> 
                    <h3>Upcoming Event</h3>
                </div>
                <div className={styles.eventInfo}>
                    <div className={styles.eventInfo__lhs}>
                        <div className={styles.eventTitle}>
                            <span>DETAILS:</span>
                            <h1>Album launch</h1>
                        </div>
                        <div className={styles.eventDateInfo}>
                            <p>29th July, 2023</p>
                            <button onClick={() => moreInfoSectionRef.current?.scrollIntoView({ behavior: "smooth" })}>View more info</button>
                        </div>
                    </div>
                    <div className={styles.eventInfo__rhs}>
                        <div className={styles.dateContainer}>
                            <div className={styles.dateContainer__count}>
                                <p>Days left</p>
                                <span>{`${String(days).length < 2 ? `0${days}` : days}`}</span>
                                <span className={styles.enlargedText}>{`${String(days).length < 2 ? `0${days}` : days}`}</span>
                            </div>
                            <span className={styles.column}></span>
                            <div className={styles.dateContainer__count}>
                                <p>Hours left</p>
                                <span>{`${String(hours).length < 2 ? `0${hours}` : hours}`}</span>
                                <span className={styles.enlargedText}>{`${String(hours).length < 2 ? `0${hours}` : hours}`}</span>
                            </div>
                            <span className={styles.column}></span>
                            <div className={styles.dateContainer__count}>
                                <p>Minutes left</p>
                                <span>{`${String(minutes).length < 2 ? `0${minutes}` : minutes}`}</span>
                                <span className={styles.enlargedText}>{`${String(minutes).length < 2 ? `0${minutes}` : minutes}`}</span>
                            </div>
                            <span className={styles.column}></span>
                            <div className={styles.dateContainer__count}>
                                <p>Seconds left</p>
                                <span>{`${String(seconds).length < 2 ? `0${seconds}` : seconds}`}</span>
                                <span className={styles.enlargedText}>{`${String(seconds).length < 2 ? `0${seconds}` : seconds}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.moreInfoSection} ref={moreInfoSectionRef}> 
                <Image src={images.Album_Launch_Flyer} alt="Event info" />   
            </div>
        </div>
    );
}

export default FullEventsSection;