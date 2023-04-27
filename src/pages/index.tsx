import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import images from '../../public/images'
import { FacebookIcon, InstagramIcon, MailIcon, PauseIcon, PlayIcon, ScrollDownArrowIcon, TwitterIcon, YoutubeIcon } from '../../components/SVGs/SVGicons'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { musics } from '../../constants/musics'
import EventSection from '../../components/EventsSection'


// const inter = Inter({ subsets: ['latin'] })

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {

  const musicSectionRef = useRef<HTMLDivElement>(null);

  // const futureDate = new Date('2023-07-29T00:00:00');

  // const calculateTimeLeft = (): TimeLeft => {
  //   const difference = +new Date(futureDate) - +new Date();
  //   let timeLeft: TimeLeft = {
  //     days: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //   };

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // });

  // const { days, hours, minutes, seconds } = timeLeft;

  // const [isPlaying, setIsPlaying] = useState(false);


  return (
    <>
      <Head>
        <title>Homepage | The revolutionary group</title>
        <meta name="description" content="Andrew is a gospel music minister called to bring God&apos;s divine presence to worshipers and to those who
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
              <Link href='/about'>
                <button>Read about Andrew</button>
              </Link>
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

        <div ref={musicSectionRef}>
          <EventSection />
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
              <Link href='/about'>
                <button>Read more</button>
              </Link>
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
