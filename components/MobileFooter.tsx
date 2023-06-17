import { FunctionComponent, ReactElement } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import images from "../public/images";
import styles from '../src/styles/Footer.module.scss';
import Link from "next/link";
import { FacebookIcon, InstagramIcon, MailIcon, TikTokIcon, TwitterIcon, YoutubeIcon } from "./SVGs/SVGicons";
import { scrollWindow } from "../constants/ScrollWindow";
import { useRouter } from "next/router";

interface MobileFooterProps {
}

const MobileFooter: FunctionComponent<MobileFooterProps> = (): ReactElement => {


    return (
        <motion.div className={styles.footerSection}
            initial={{ opacity: 1, scale: 1, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'linear', delay: 0.2 }}>
            <Link href='/'>
                <div className={styles.footerSection__image}>
                    <Image src={images.logo} alt='Logo' fill />
                </div> 
            </Link>
            <div className={styles.footerSection__quickLinks}>
                <h3>Quick links</h3>
                <ul className={styles.links}> 
                    <Link href='/'>
                        <li>Home</li>     
                    </Link> 
                    <Link href='/music'>  
                        <li>Musics</li>
                    </Link>
                    <Link href='/contact'>
                        <li>Contact</li>
                    </Link>
                    <Link href='/about'>
                        <li>About</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.footerSection__socials}>
                <Link href='https://facebook.com/gracefulandrew' target='_blank'>
                    <span><FacebookIcon /></span>
                </Link>
                <Link href='https://instagram.com/gracefulandrew?igshid=YmMyMTA2M2Y=' target='_blank'>
                    <span><InstagramIcon /></span>
                </Link>
                <Link href='https://youtube.com/@Gracefulandrew' target='_blank'>
                    <span><YoutubeIcon /></span>
                </Link>
                <Link href='https://twitter.com/gadpraiseandrew' target='_blank'>
                    <span><TwitterIcon /></span>
                </Link>
                <Link href='https://tiktok.com/@gracefulandrew' target='_blank'>
                    <span><TikTokIcon /></span>
                </Link>
                <Link href='mailto:gadpraise@gmail.com' target='_blank'>
                    <span><MailIcon /></span>
                </Link>
            </div>
        </motion.div>
    );
}

export default MobileFooter;