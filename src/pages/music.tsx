import { FunctionComponent, ReactElement } from "react";
import styles from '../styles/Music.module.scss';
import Image from "next/image";
import images from "../../public/images";
import { PlayIcon } from "../../components/SVGs/SVGicons";
import Player from "../../components/Player";
// import DoneItAll from "../../public/musics/he_has_done_it_all.mp3";   

interface MusicProps {

}

const Music: FunctionComponent<MusicProps> = (): ReactElement => {
    return (
        <div className={styles.musicPage}>
            <div className={styles.topPageArea}>
                <div className={styles.topPageArea__image}>
                    <Image src={images.musicBg} alt="background" />
                </div>
                <span>Musics</span>
            </div>
            <div className={styles.bodyContent}>
                {([...Array(1)]).map((each, index) =>
                    <div className={styles.eachMusic} key={index}>
                        <div className={styles.eachMusic__image}>
                            <Image src={images.He_Has_Done_It_All_Cover} alt='music cover' />
                            {/* <div className={styles.controlArea}>
                                <div className={styles.overlay}></div>
                                <PlayIcon />
                            </div> */}
                        </div>
                        <div className={styles.eachMusic__info}>
                            <span>He Has Done It All</span>
                            <h3>2023</h3>
                            <p>Christian & Gospel</p>
                            <div className={styles.cta}>
                                <Player src='/musics/he_has_done_it_all.mp3' />
                                {/* <button> */}
                                    <a href="/musics/he_has_done_it_all.mp3" download="he_has_done_it_all.mp3">Download audio</a>
                                {/* </button> */}
                            </div>
                            {/* <button>Play music</button> */}
                            {/* <button>Pause music</button> */}
                            <div className={styles.socials}>
                                {/* <span>< /></span> */}
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}

export default Music;