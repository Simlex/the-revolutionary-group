import { Dispatch, FunctionComponent, ReactElement, SetStateAction, useState } from "react";
import styles from '../../src/styles/musicInfoModal.module.scss';
import modalStyle from '../../src/styles/modalStyle.module.scss';
import { CloseMenuIcon } from "../SVGs/SVGicons";
import Image, { StaticImageData } from "next/image";
import images from "../../public/images";
import Player from "../Player";

interface MusicInfoModalProps {
    setVisibility: Dispatch<SetStateAction<boolean>>
    visibility: boolean
    musicTitle: string
    musicImage: StaticImageData
    musicDescription: string
    musicPath: string
}

const MusicInfoModal: FunctionComponent<MusicInfoModalProps> = ({ visibility, setVisibility, musicTitle, musicImage, musicDescription, musicPath }): ReactElement => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={visibility ? modalStyle.modalParent : modalStyle.modalParentInvisible}>
            <div className={modalStyle.overlay} onClick={() => {
                setIsPlaying(false) 
                setVisibility(false)
                }}></div>
            <div className={`${modalStyle.modalContainer} ${styles.musicInfoModalContainer}`}>
                <div className={styles.musicInfoModalContainer__topArea}>
                    <p className={styles.title}>{musicTitle}</p>
                    <span onClick={() => {
                        setIsPlaying(false) 
                        setVisibility(false)
                        }}><CloseMenuIcon /></span>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.image}>
                        <Image src={musicImage} alt="music cover" fill />
                    </div>
                    <div className={styles.musicDetails}>
                        {/* <h3>Great God</h3> */}
                        <div className={styles.musicDetails__description}>
                            <p>{musicDescription}</p>
                        </div>
                        <div className={styles.musicDetails__actions}>
                            {/* <button>Play</button> */}
                            {/* {visibility && <Player src={'/musics/he_has_done_it_all.mp3'} />} */}
                            {visibility && <Player src={`${musicPath}`} /> }
                            <button>Download</button>
                        </div>
                    </div>
                </div>

                <div className={styles.musicInfoModalContainer__actionButtons}>
                    <button onClick={() => {
                        setIsPlaying(false) 
                        setVisibility(false)
                        }}>Close</button>
                    {/* <button type="submit">Ok</button> */}
                </div>
            </div>
        </div>
    );
}

export default MusicInfoModal;