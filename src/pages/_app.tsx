import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../../components/Layout'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import styles from '../styles/Welcome.module.scss';
import Image from 'next/image';
import images from '../../public/images';

export default function App({ Component, pageProps }: AppProps) {

  const [isWelcomeScreenVisible, setIsWelcomeScreenVisible] = useState(true);
  const [isWelcomeScreenStyle, setIsWelcomeScreenStyle] = useState(true);

  useEffect(() => {
    if (!isWelcomeScreenStyle) {
      setTimeout(() => {
        setIsWelcomeScreenVisible(false);
      }, 500);
    }
  }, [isWelcomeScreenStyle])

  return (
    <>
      {
        isWelcomeScreenVisible ?
          <div className={isWelcomeScreenStyle ? styles.welcomeScreen : styles.welcomeScreenClose}>
            <div className={styles.image}>
              <Image src={images.AndrewPortrait2} alt='Andrew' />
            </div>
            <span>ANDREW GODWIN</span>
            <p>Welcomes you to <span>revelatorygeneration.net</span></p>
            <button onClick={() => setIsWelcomeScreenStyle(false)}>Continue to site</button>
          </div>
          :
          <Layout>
            <Component {...pageProps} />
          </Layout>
      }
    </>
  )
}
