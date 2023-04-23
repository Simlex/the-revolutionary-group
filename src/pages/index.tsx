import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import images from '../../public/images'
import { FacebookIcon, InstagramIcon, MailIcon, ScrollDownArrowIcon, TwitterIcon, YoutubeIcon } from '../../components/SVGs/SVGicons'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'


// const inter = Inter({ subsets: ['latin'] })

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {

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


  return (
    <>
      <Head>
        <title>Homepage | The revolutionary group</title>
        <meta name="description" content="ndrew is a gospel music minister called to bring God&apos;s divine presence to worshipers and to those who
              would dare to praise Him in every nation of the world and to use music to build
              an unforgettable intimate fellowship between believers and God as well ministration to the unsaved." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homepageBody}>

        <div className={styles.heroContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageArea}>
              <Image src={images.andrew} alt='artist image' />
            </div>
          </div>
          <div className={styles.artistInfo}>
            <h2>MINISTER ANDREW</h2>
            <p>Andrew is called to bring God&apos;s divine presence to worshipers and to those who
              would dare to praise Him in every nation of the world and to use music to build
              an unforgettable intimate fellowship between believers and God as well ministration to the unsaved. </p>
            <div className={styles.cta}>
              <button>Read about Andrew</button>
              <button>View musics</button>
            </div>
          </div>
          {/* <ScrollLink to="musicSection" smooth={true} duration={500} offset={0}> */}
          <div className={styles.scrollNext}
            onClick={() => musicSectionRef.current?.scrollIntoView({ behavior: "smooth" })}>
            <Image src={images.scroll_down} alt='scroll' />
            <ScrollDownArrowIcon />
          </div>
          {/* </ScrollLink> */}
        </div>

        <div className={styles.eventsSection} ref={musicSectionRef}>
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
                  <button>View more info</button>
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
          <div className={styles.recentMusicContainer}>
            <div className={styles.recentMusicContainer__topArea}>
              <h3>Recent Musics</h3>
              {/* <Link href='/' legacyBehavior>
                <a>See all</a>
              </Link> */}
            </div>
            <div className={styles.recentMusicContainer__musics}>
              {
                ([...Array(3)]).map((eachMusic, index) => (
                  <div className={styles.eachMusicCard} key={index}>
                    <div className={styles.image}>
                      <Image src={images.He_Has_Done_It_All_Cover} alt='music cover' />
                    </div>
                    <div className={styles.musicInfo}>
                      <div className={styles.musicInfo__top}>
                        <h2>Great God</h2>
                        <p>This is a song about the goodness of God. It says a lot about how God has helped his people...</p>
                      </div>
                      <div className={styles.cta}>
                        <button>Read more</button>
                        <button>Listen</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <Link href='/' legacyBehavior>
              <button className={styles.seeMoreBtn}>See all</button>
            </Link>
          </div>
        </div>

        <div className={styles.aboutSection}>
          <div className={styles.topArea}>
            <h3>About Minister Andrew</h3>
          </div>
          <div className={styles.content}>
            <div className={styles.content__image}>
              <Image src={images.andrew} alt='Musician' />
            </div>
            <div className={styles.content__textInfo}>
              <div className={styles.text}>
                <p>Andrew is called to bring God&apos;s divine presence to worshipers and
                  to those who would dare to praise Him in every nation of the world
                  and to use music to build an unforgettable intimate fellowship
                  between believers and God as well ministration to the unsaved. </p>
                <p>Andrew is called to raise a sect of worshipers who will worship
                  God in spirit and in truth with the understanding that God
                  delights in them and inhabits their praises. </p>
                <p>My focus is to invite the presence of God through music to its listeners.
                  Through the wordings of my songs, the word of God will come alive in my
                  listeners spirit and compel them to offer sanctified sacrifices of
                  praise to God  through the calves of their lips. </p>
              </div>
              <button>Read more</button>
            </div>
          </div>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.topArea}>
            <h3>Contact me</h3>
            <p>For booking purposes, Feel free to contact me using any of the platforms beloe</p>
          </div>
          <div className={styles.socials}>
            <Link href='/' target='_blank'>
            <span><FacebookIcon /></span>
            </Link>
            <Link href='https://instagram.com/gracefulandrew?igshid=YmMyMTA2M2Y=' target='_blank'>
            <span><InstagramIcon /></span>
            </Link>
            <Link href='https://youtube.com/@Gracefulandrew' target='_blank'>
            <span><YoutubeIcon /></span>
            </Link>
            <Link href='/' target='_blank'>
            <span><TwitterIcon /></span>
            </Link>
            <Link href='/' target='_blank'>
            <span><MailIcon /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
