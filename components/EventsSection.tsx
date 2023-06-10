import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactElement, RefObject, useEffect, useRef, useState } from "react";
import styles from '../src/styles/Home.module.scss';
import { musics } from "../constants/musics";
import images from "../public/images";
import { PauseIcon, PlayIcon } from "./SVGs/SVGicons";
import { motion } from 'framer-motion';
import MusicInfoModal from "./Music/MusicInfoModal";
import { MusicModel } from "../models/musicModel";

interface EventSectionProps {

}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const EventSection: FunctionComponent<EventSectionProps> = (): ReactElement => {

    const musicSectionRef = useRef<HTMLDivElement>(null);

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

    const [musicInfoModalIsVisible, setMusicInfoModalIsVisible] = useState(false);

    const [selectedMusic, setSelectedMusic] = useState<MusicModel>();

    return (
        <>
            <MusicInfoModal
                visibility={musicInfoModalIsVisible}
                setVisibility={setMusicInfoModalIsVisible}
                musicDescription={selectedMusic?.description as string}
                musicImage={selectedMusic?.image as StaticImageData}
                musicPath={selectedMusic?.path as string}
                musicTitle={selectedMusic?.name as string}
            />

            <div className={styles.eventsSection} ref={musicSectionRef}>
                <span className={styles.blurredArea}></span>
                <span className={styles.blurredArea}></span>

                <div className={styles.eventAlertContainer}>
                    <div className={styles.eventAlertContainer__topArea}>
                        <h3>Upcoming Event</h3>
                    </div>
                    <div className={styles.eventInfo}>
                        <motion.div className={styles.eventInfo__lhs}
                            initial={{ opacity: 0, scale: 1, y: 80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}>
                            <div className={styles.eventTitle}>
                                <span>DETAILS:</span>
                                <h1>Album launch</h1>
                            </div>
                            <div className={styles.eventDateInfo}>
                                <p>29th July, 2023</p>
                                <Link href='/events'>
                                    <button>View more info</button>
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div className={styles.eventInfo__rhs}
                            initial={{ opacity: 0, scale: 1, y: -80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}>
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
                        </motion.div>
                    </div>
                </div>

                <div className={styles.recentMusicContainer}>
                    <div className={styles.recentMusicContainer__topArea}>
                        <h3>Recent Musics</h3>
                        {/* <Link href='/' legacyBehavior>
                            <a>See all</a>
                        </Link> */}
                    </div>
                    <div className={styles.recentMusicContainer__musics}>
                        {
                            musics.map((eachMusic, index) => (
                                <motion.div className={styles.eachMusicCard} key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, ease: 'linear' }}>
                                    <div className={styles.image}>
                                        <Image src={eachMusic.image} alt='music cover' fill />
                                    </div>
                                    <div className={styles.musicInfo}>
                                        <div className={styles.musicInfo__top}>
                                            <h2>{eachMusic.name}</h2>
                                            <p>{eachMusic.shortDescription}</p>
                                        </div>
                                        <div className={styles.cta}>
                                            {/* <Link href='/music'> */}
                                            <button onClick={() => {
                                                setSelectedMusic(eachMusic)
                                                setMusicInfoModalIsVisible(true)
                                            }}>Read more</button>
                                            {/* </Link> */}
                                            {/* <button onClick={() => setIsPlaying(!isPlaying)}>Listen {!isPlaying ? <PlayIcon /> : <PauseIcon />}</button> */}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                    <Link href='/music' legacyBehavior>
                        <button className={styles.seeMoreBtn}>See all musics</button>
                    </Link>
                </div>

                <div className={styles.youtubeVideosContainer}>
                    <div className={styles.youtubeVideosContainer__topArea}>
                        <h3>Videos</h3>
                    </div>
                    <div className={styles.youtubeVideosContainer__videos}>
                        <motion.iframe
                            width='100%'
                            height='100%'
                            src="https://www.youtube.com/embed/6nakg7IWRgA"
                            title="He's done it all"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            initial={{ opacity: 0, scale: 0.9, y: 80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}>
                        </motion.iframe>
                        <motion.video
                            initial={{ opacity: 0, scale: 0.9, y: 80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}
                            // src="/videos/live_program.mp4"
                            src="https://res.cloudinary.com/dxwpajciu/video/upload/v1686411732/The%20revelatory%20generation/videos/video_2023-06-10_16-26-48_er5ovg.mp4"
                            typeof="video/mp4"
                            controls>
                        </motion.video>
                        <motion.iframe
                            width='100%'
                            height='100%'
                            src="https://www.youtube.com/embed/Fz6KwG7fo4k"
                            title="He's done it all"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            initial={{ opacity: 0, scale: 0.9, y: 80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}>
                        </motion.iframe>
                        <motion.video
                            initial={{ opacity: 0, scale: 0.9, y: 80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}
                            // src="/videos/live_program.mp4"
                            src="https://res.cloudinary.com/dxwpajciu/video/upload/v1685170105/The%20revelatory%20generation/videos/live_program_ze6wck.mp4"
                            typeof="video/mp4"
                            controls>
                        </motion.video>
                        <motion.iframe
                            width='100%'
                            height='100%'
                            src="https://www.youtube.com/embed/UXpZncegWP8"
                            title="Great God"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            initial={{ opacity: 0, scale: 0.9, y: 80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}>
                        </motion.iframe>
                        <motion.iframe
                            width='100%'
                            height='100%'
                            // src="https://www.youtube.com/embed/KnVZuXLqHtQ?autoplay=1&&showinfo=0&loop=1&mute=1"
                            src="https://www.youtube.com/embed/KnVZuXLqHtQ"
                            title="African Praise Medley by Andrew Godwin"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            initial={{ opacity: 0, scale: 0.9, y: 80 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}>
                        </motion.iframe>
                    </div>
                    <Link href='https://www.youtube.com/@Gracefulandrew' target='_blank'>
                        <button className={styles.seeMoreBtn}>See more videos</button>
                    </Link>
                </div>
            </div >
        </>
    );
}

export default EventSection;