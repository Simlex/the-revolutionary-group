import { FunctionComponent, ReactElement } from "react";
import styles from '../src/styles/Footer.module.scss';
import Image from "next/image";
import images from "../public/images";
import Link from "next/link";
import useResponsive from "../hooks/useResponsiveness";

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
        </>
    );
}

export default Footer;