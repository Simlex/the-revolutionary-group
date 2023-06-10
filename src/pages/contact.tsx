import { FunctionComponent, ReactElement } from "react";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import images from "../../public/images";
import { FacebookIcon, InstagramIcon, MailIcon, TwitterIcon, YoutubeIcon } from "../../components/SVGs/SVGicons";
import Link from "next/link";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = (): ReactElement => {
    return (
        <div className={styles.contactPageBody}>
            <div className={styles.imageArea}>
                <div className={styles.image}>
                    <Image src={images.AndrewPortrait2} fill alt="Andrew Godwin" />
                </div>
            </div>
            <div className={styles.content}>
                <h2>Feel free to contact me via any of the platforms below</h2>

                <div className={styles.content__socialMediaList}>
                    <Link href='/' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><FacebookIcon /></span>
                            <p>@andrewgodiwn</p>
                        </div>
                    </Link>
                    <Link href='https://instagram.com/gracefulandrew?igshid=YmMyMTA2M2Y=' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><InstagramIcon /></span>
                            <p>@gracefulandrew</p>
                        </div>
                    </Link>
                    <Link href='https://youtube.com/@Gracefulandrew' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><YoutubeIcon /></span>
                            <p>@Gracefulandrew</p>
                        </div>
                    </Link>
                    <Link href='/' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><TwitterIcon /></span>
                            <p>@andrewgodiwn</p>
                        </div>
                    </Link>
                    <Link href='/' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><MailIcon /></span>
                            <p>@andrewgodiwn</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;