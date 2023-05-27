import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../styles/Music.module.scss';
import Image from "next/image";
import images from "../../public/images";
import { PlayIcon } from "../../components/SVGs/SVGicons";
import Player from "../../components/Player";
import { albums, musics } from "../../constants/musics";
import useResponsive from "../../hooks/useResponsiveness";
// import DoneItAll from "../../public/musics/he_has_done_it_all.mp3";   

interface MusicProps {

}

const Music: FunctionComponent<MusicProps> = (): ReactElement => {

    const [showAlbumMusics, setShowAlbumMusics] = useState(false);

    const onMobile = useResponsive();

    return (
        <div className={styles.musicPage}>
            <div className={styles.topPageArea}>
                <div className={styles.topPageArea__image}>
                    <Image src={images.musicBg} alt="background" />
                </div>
                <span>Musics</span>
            </div>
            <div className={styles.bodyContent}>
                {/* {([...Array(1)]).map((each, index) =>
                    <div className={styles.eachMusic} key={index}>
                        <div className={styles.eachMusic__image}>
                            <Image src={images.He_Has_Done_It_All_Cover} alt='music cover' />
                        </div>
                        <div className={styles.eachMusic__info}>
                            <span>He Has Done It All</span>
                            <h3>2023</h3>
                            <p>Christian & Gospel</p>
                            <div className={styles.cta}>
                                <Player src='/musics/he_has_done_it_all.mp3' />
                                <a href="/musics/he_has_done_it_all.mp3" download="he_has_done_it_all.mp3">Download audio</a>
                            </div>
                            <div className={styles.socials}>
                            </div>
                        </div>
                    </div>)} */}
                {onMobile && albums.map((eachAlbum, index) =>
                    <div className={styles.eachAlbum} key={index}>
                        <div className={styles.eachAlbum__title}>
                            <h2>{eachAlbum.albumName}</h2>
                            <button className={styles.musicToggle} onClick={() => setShowAlbumMusics(!showAlbumMusics)}>{showAlbumMusics ? 'Close musics' : `See all musics under ${eachAlbum.albumName}`}</button>
                        </div>
                        {showAlbumMusics && eachAlbum.musics.map((eachMusic, index) => {
                            return (
                                <div className={styles.eachAlbum__music} key={index}>
                                    <span>{eachMusic.name}</span>
                                    {/* <h3>{eachMusic.year}</h3> */}
                                    {/* <p>{eachMusic.genre}</p> */}
                                    <div className={styles.cta}>
                                        <Player src={eachMusic.path} />
                                        <a href={eachMusic.path} download={eachMusic.music}>Download audio</a>
                                    </div>
                                    {/* <div className={styles.socials}>
                                    </div> */}
                                </div>
                            )
                        })}
                    </div>)}
                {musics.map((eachMusic, index) =>
                    <div className={styles.eachMusic} key={index}>
                        <div className={styles.eachMusic__image}>
                            <Image src={eachMusic.image} alt='music cover' />
                            {/* <div className={styles.controlArea}>
                            <div className={styles.overlay}></div>
                            <PlayIcon />
                        </div> */}
                        </div>
                        <div className={styles.eachMusic__info}>
                            <span>{eachMusic.name}</span>
                            <h3>{eachMusic.year}</h3>
                            <p>{eachMusic.genre}</p>
                            <div className={styles.cta}>
                                <Player src={eachMusic.path} />
                                <a href={eachMusic.path} download={eachMusic.music}>Download audio</a>
                            </div>
                            <div className={styles.socials}>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}

export default Music;