import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';
import style from '../src/styles/profilePhotoView.module.scss';

interface ProfilePhotoViewProps {
    image: string | undefined;
    photoPreview: boolean;
    setPhotoPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfilePhotoView: FunctionComponent<ProfilePhotoViewProps> = ({ image, photoPreview, setPhotoPreview }): ReactElement => {
    return (
        <div className={photoPreview ? style.previewContainer : style.previewContainerClose}>
            <div className={style.overlay} onClick={() => setPhotoPreview(false)}></div>
            <div className={style.previewArea}>
                {/* {image ? */}
                <div className={style.photo}>
                    {/* <Image src={`data:image/png;base64,${image}`} fill alt='profile' />  */}
                    <Image src={image as string} fill alt='gallery photo' /> 
                </div>
                {/* :
                    <div className={style.photoNotAvailable}>
                        <Image src={avatarImage} layout="fill" alt='profile' />
                        <p className={style.message}>Profile photo is not available</p>
                    </div> 
                 } */}
                <button onClick={() => setPhotoPreview(false)}>Dismiss</button>
            </div>
        </div>
    );
}

export default ProfilePhotoView;