import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import images from '../../public/images'
import { images as galleryImages } from '../../constants/gallery'
import { FacebookIcon, InstagramIcon, MailIcon, PauseIcon, PlayIcon, ScrollDownArrowIcon, TwitterIcon, YoutubeIcon } from '../../components/SVGs/SVGicons'
import Link from 'next/link'
import { FunctionComponent, ReactElement, useEffect, useRef, useState } from 'react'
import { musics } from '../../constants/musics'
import EventSection from '../../components/EventsSection'
import { motion } from 'framer-motion';
import MobileFooter from '../../components/MobileFooter'
import ProfilePhotoView from '../../components/ProfilePhotoView'
import { useRouter } from 'next/router'
import { PageProps } from '../../models/PageProps'


// const inter = Inter({ subsets: ['latin'] })

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// const Home: NextPage<PageProps> = ({ airports }: PageProps) => {
const Home: FunctionComponent<PageProps> = ({ isDonationPopupVisible, setIsDonationPopupVisible }): ReactElement => {

// export default function Home() {

  const router = useRouter();

  const musicSectionRef = useRef<HTMLDivElement>(null);

  const homepageBodyRef = useRef<HTMLDivElement>(null);

  // State for profile photo view visibility
  const [photoPreview, setPhotoPreview] = useState(false);

  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>();

  function showPhotoModal(imageSelected: string) {
    setSelectedGalleryImage(imageSelected)
    selectedGalleryImage && setPhotoPreview(true);
  };

  useEffect(() => {
    if (router.isReady) {
      homepageBodyRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [router.isReady]);

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

      <ProfilePhotoView
        image={selectedGalleryImage}
        photoPreview={photoPreview}
        setPhotoPreview={setPhotoPreview} />

      <div className={styles.homepageBody} ref={homepageBodyRef}>

        <div className={styles.heroContainer}>
          <div className={styles.imageContainer}>
            <motion.div className={styles.imageArea}
              initial={{ opacity: 0, scale: 0.6, x: 80 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.2, ease: 'linear', delay: 0.2 }}>
              <Image src={images.AndrewPortrait2} alt='artist image' fill />
            </motion.div>
          </div>
          <motion.div className={styles.artistInfo}
            initial={{ opacity: 0, scale: 1, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'linear', delay: 0.2 }}>
            <h2>MINISTER ANDREW</h2>
            <p>Andrew is called to bring God&apos;s divine presence to worshipers and to those who
              would dare to praise Him in every nation of the world and to use music to build
              an unforgettable intimate fellowship between believers and God as well ministration to the unsaved. </p>
            <div className={styles.cta}>
              <Link href='/about'>
                <button>Read about Andrew</button>
              </Link>
              <Link href='/music'>
                <button>View musics</button>
              </Link>
              {/* <button onClick={() => musicSectionRef.current?.scrollTo({top: 0})}> View musics</button>       */}
            </div>
          </motion.div>
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

        <div className={styles.gallerySection}>
          <div className={styles.topArea}>
            <h3>Gallery</h3>
          </div>

          <div className={styles.content}>
            {
              galleryImages.map((eachImage, index) => (
                <div className={styles.content__image} key={index}>
                  <Image src={eachImage.image} alt='event' fill
                    onClick={(e) => showPhotoModal(eachImage.image)} />
                </div>
              ))
            }
            {/* <div className={styles.content__image}>
              <Image src={images.AndrewSitting} alt='event' fill />
            </div>
            <div className={styles.content__image}>
              <Image src={images.AndrewSitting} alt='event' fill />
            </div>
            <div className={styles.content__image}>
              <Image src={images.AndrewSitting} alt='event' fill />
            </div> */}
          </div>
        </div>

        {/* <div className={styles.donateSection}>
          <div className={styles.donateSection__image}>
            <Image src={images.donationTag} fill alt='Donation tag' />
          </div>
          <div className={styles.topArea}>
            <h3>Support My Gospel Music Ministry</h3>
          </div>
          <div className={styles.textContent}>
            <p>Your generosity can make a significant impact in this
              ministry. By donating to our cause, you play an integral
              role in spreading the transformative power of worship
              through melodies and lyrics that glorify God.
              Your contribution helps us create meaningful songs,
              produce high-quality music, and reach a wider audience
              with the message of God&apos;s love and grace.</p>
            <button onClick={() => setIsDonationPopupVisible(true)}>Donate</button>
          </div>
        </div> */}

        <div className={styles.aboutSection}>
          <div className={styles.topArea}>
            <h3>About Minister Andrew</h3>
          </div>
          <div className={styles.content}>
            <motion.div className={styles.content__image}
              initial={{ opacity: 0, scale: 1, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'linear' }}>
              <Image src={images.AndrewStanding1} alt='Musician' fill />
            </motion.div>
            <motion.div className={styles.content__textInfo}
              initial={{ opacity: 0, scale: 1, y: -80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'linear' }}>
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
            </motion.div>
          </div>
        </div>

        {/* <div className={styles.contactSection}>
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
        </div> */}
      </div>
    </>
  )
}

export default Home;