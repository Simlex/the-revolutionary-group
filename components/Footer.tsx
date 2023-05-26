import { FunctionComponent, ReactElement } from "react";
import styles from '../src/styles/Footer.module.scss';
import Image from "next/image";
import images from "../public/images";
import Link from "next/link";
import useResponsive from "../hooks/useResponsiveness";
import { FacebookIcon, InstagramIcon, MailIcon, TwitterIcon, YoutubeIcon } from "./SVGs/SVGicons";
import { motion } from 'framer-motion';

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = (): ReactElement => {

    const onMobile = useResponsive();

    return (
        <>
            {!onMobile &&
                <div className={`${styles.footerContainer} ${styles.container}`}>
                    <div className={styles.lhs}>
                        <Link href='/'>
                            <div className={styles.logo}>
                                <Image src={images.logo} alt="logo" />
                            </div>
                        </Link>
                        <p>&copy;2023 The Revelationary Group</p>
                    </div>
                    <div className={styles.policy}>
                        <p>Privacy Policy</p>
                        |
                        <p>Developed by Simlex</p>
                    </div>
                </div>}

            {/* {onMobile &&
                <motion.div className={styles.footerSection}
                    initial={{ opacity: 1, scale: 1, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: 'linear', delay: 0.2 }}>
                    <div className={styles.footerSection__image}>
                        <Image src={images.logo} alt='Logo' />
                    </div>
                    <div className={styles.footerSection__quickLinks}>
                        <h3>Quick links</h3>
                        <ul className={styles.links}>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className={styles.footerSection__socials}>
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
                </motion.div>} */}
        </>
    );
}

export default Footer;