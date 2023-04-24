import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../src/styles/Navbar.module.scss';
import Image from "next/image";
import images from "../public/images";
import Link from "next/link";
import { useRouter } from "next/router";
import useResponsive from "../hooks/useResponsiveness";
import { ArrowIcon, CloseMenuIcon, HamburgerMenuIcon } from "./SVGs/SVGicons";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {

    const [bookingPanelVisibility, setBookingPanelVisibility] = useState(true);

    const route = useRouter();

    const onMobile = useResponsive();

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            {
                onMobile ?
                    <div className={`${styles.navbarContainer} ${styles.container}`}>
                        <div className={styles.navbarContainer__logo}>
                            <Link href="/"><Image src={images.logo} alt="app__logo" /></Link>
                        </div>
                        <div className={styles.navbarContainer__menuIcon} onClick={() => setIsNavOpen(true)}>
                            <HamburgerMenuIcon />
                        </div>

                        {isNavOpen &&
                            <div className={styles.mobileNavContainer}>
                                <div className={styles.mobileNavContainer__topArea}>
                                    <div className={styles.logo}>
                                        <Link href="/"><Image src={images.logo} alt="app__logo" /></Link>
                                    </div>
                                    <div className={styles.closeIcon} onClick={() => setIsNavOpen(false)}>
                                        <CloseMenuIcon />
                                    </div>
                                </div>
                                <div className={styles.mobileNavContainer__navigationLinks}>
                                    <div className={styles.navLinks}>
                                        <Link href='/' onClick={() => setIsNavOpen(false)}>
                                            <li className={route.pathname == '/' ? styles.active : ''}>Home</li>
                                        </Link>
                                        <Link href='/music' onClick={() => setIsNavOpen(false)}>
                                            <li className={route.pathname == '/music' ? styles.active : ''}>My Musics</li>
                                        </Link>
                                        <Link href='/events' onClick={() => setIsNavOpen(false)}>
                                            <li className={route.pathname == '/events' ? styles.active : ''}>Events</li>
                                        </Link>
                                        <Link href='/blog' onClick={() => setIsNavOpen(false)}>
                                            <li className={route.pathname == '/blog' ? styles.active : ''}>Blog</li>
                                        </Link>
                                        <Link href='/about' onClick={() => setIsNavOpen(false)}>
                                            <li className={route.pathname == '/about' ? styles.active : ''}>About me</li>
                                        </Link>
                                        <Link href='/contact' onClick={() => setIsNavOpen(false)}>
                                            <li className={route.pathname == '/contact' ? styles.active : ''}>Contact me</li>
                                        </Link>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    :
                    <div className={`${styles.navbar} ${styles.container}`}>
                        {/* <div className={styles.logo}>
                <Link href='/'>
                    <Image src={images.logo} alt="Logo" />
                </Link>
            </div> */}
                        <ul className={styles.navLinks}>
                            <Link href='/'>
                                <li className={route.pathname == '/' ? styles.active : ''}>Home</li>
                            </Link>
                            <Link href='/music'>
                                <li className={route.pathname == '/music' ? styles.active : ''}>My Musics</li>
                            </Link>
                            <Link href='/events'>
                                <li className={route.pathname == '/events' ? styles.active : ''}>Events</li>
                            </Link>
                            <Link href='/blog'>
                                <li className={route.pathname == '/blog' ? styles.active : ''}>Blog</li>
                            </Link>
                            <Link href='/about'>
                                <li className={route.pathname == '/about' ? styles.active : ''}>About me</li>
                            </Link>
                            <Link href='/contact'>
                                <li className={route.pathname == '/contact' ? styles.active : ''}>Contact me</li>
                            </Link>
                        </ul>
                        <div className={styles.cta}>
                            <button onClick={() => setBookingPanelVisibility(true)}>Book now</button>
                        </div>
                    </div>
            }
        </>
    );
}

export default Navbar;