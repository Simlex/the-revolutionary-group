import { FunctionComponent, ReactElement, useEffect, useRef } from "react";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import images from "../../public/images";
import { FacebookIcon, InstagramIcon, MailIcon, TikTokIcon, TwitterIcon, YoutubeIcon } from "../../components/SVGs/SVGicons";
import Link from "next/link";
import { useRouter } from "next/router";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = (): ReactElement => {
    
    const router = useRouter(); 

    const contactpageBodyRef = useRef<HTMLDivElement>(null);
 
    useEffect(() => {
      if(router.isReady) {
        contactpageBodyRef.current?.scrollIntoView({ behavior: "auto", block: 'nearest' });
      }
    }, [router.isReady]);

    return (
        <div className={styles.contactPageBody} ref={contactpageBodyRef}>
            <div className={styles.imageArea}>
                <div className={styles.image}>
                    <Image src={images.AndrewPortrait2} fill alt="Andrew Godwin" />
                </div>
            </div>
            <div className={styles.content}>
                <h2>For all booking inquiries, event invitations, or media-related requests, please don&apos;t hesitate to contact me. I value your interest and support.</h2>

                <div className={styles.content__socialMediaList}>
                    <Link href='https://facebook.com/gracefulandrew' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><FacebookIcon /></span>
                            <p>@gracefulandrew</p>
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
                    <Link href='https://twitter.com/gadpraiseandrew' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><TwitterIcon /></span>
                            <p>@gadpraiseandrew</p>
                        </div>
                    </Link>
                    <Link href='https://tiktok.com/@gracefulandrew' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><TikTokIcon /></span>
                            <p>@gracefulandrew</p>
                        </div>
                    </Link>
                    <Link href='mailto:gadpraise@gmail.com' target='_blank'>
                        <div className={styles.socialMedia}>
                            <span><MailIcon /></span>
                            <p>gadpraise@gmail.com</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;