import { Dispatch, FunctionComponent, ReactElement, RefObject, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import styles from '../../src/styles/donationModal.module.scss';
import modalStyle from '../../src/styles/modalStyle.module.scss';
import { CloseMenuIcon, CopyIcon } from "../SVGs/SVGicons";
import Image from "next/image";
import images from "../../public/images";

interface DonationModalProps {
    setVisibility: Dispatch<SetStateAction<boolean>>
    visibility: boolean
}

const DonationModal: FunctionComponent<DonationModalProps> = ({ visibility, setVisibility }): ReactElement => {

    const [accountIsCopied, setAccountIsCopied] = useState(false);

    const zelleareaRef = useRef<HTMLParagraphElement>(null);
    const cashappareaRef = useRef<HTMLParagraphElement>(null);

    function copyItem(textareaRef: RefObject<HTMLParagraphElement>, stateNameFunction: Dispatch<SetStateAction<boolean>>) {

        const element = textareaRef;

        console.log(element);

        // Create a temporary textarea element
        const textarea = document.createElement('textarea');

        // Set the value of the textarea to the text content of the element
        textarea.value = element?.current?.textContent as string;

        // Append the textarea to the document body
        document.body.appendChild(textarea);

        // Select the text within the textarea
        textarea.select();

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(textarea);

        stateNameFunction(true);
        setTimeout(() => {
            stateNameFunction(false);
        }, 1500);
        // }
    }

    return (
        <div className={visibility ? modalStyle.modalParent : modalStyle.modalParentInvisible}>
            <div className={modalStyle.overlay} onClick={() => setVisibility(false)}></div>
            <div className={`${modalStyle.modalContainer} ${styles.donationModalContainer}`}>
                <div className={styles.donationModalContainer__topArea}>
                    <p>Donation</p>
                    <span onClick={() => setVisibility(false)}><CloseMenuIcon /></span>
                </div>
                <div className={styles.content}>
                    <h5>Support My Gospel Music Ministry</h5>
                    <div className={styles.content__image}>
                        <Image src={images.donation} fill alt="Donation image" />
                    </div>
                    <div className={styles.content__textContent}>
                        <p>Join us in spreading the message of hope, love, and faith through the power of gospel music.
                            Your support enables us to continue producing soul-stirring melodies and uplifting lyrics
                            that touch the hearts of listeners around the world.</p>
                    </div>
                    <div className={styles.content__accountsInfo}>
                        <div className={styles.account}>
                            <div className={styles.account__topInfo}>
                                <div className={styles.accountLogo}>
                                    <Image src={images.zelle} fill alt="logo" />
                                </div>
                                {/* <p>Zelle</p> */}
                            </div>
                            <div className={styles.account__accountInfo}>
                                <p>gadpraise@gmail.com</p>
                                {/* <span> */}
                                    {/* Copy */}
                                    {/* {accountIsCopied ? <CopyIcon clicked /> : <CopyIcon />} */}
                                {/* </span> */}
                            </div>
                        </div>
                        <div className={styles.account}>
                            <div className={styles.account__topInfo}>
                                <div className={styles.accountLogo}>
                                    <Image src={images.cashapp} fill alt="logo" />
                                </div>
                                {/* <p>Zelle</p> */}
                            </div>
                            <div className={styles.account__accountInfo}>
                                <p>$gadpraise1</p>
                                {/* <span> */}
                                    {/* Copy */}
                                    {/* {accountIsCopied ? <CopyIcon clicked /> : <CopyIcon />} */}
                                {/* </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.donationModalContainer__actionButtons}>
                <button onClick={() => setVisibility(false)}>Cancel</button>
                <button>Okay    </button>
            </div>
        </div>
    );
}

export default DonationModal;