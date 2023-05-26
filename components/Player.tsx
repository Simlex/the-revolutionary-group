import { useState, useRef } from "react";

type PlayerProps = {
    src: string;
};

const Player = ({ src }: PlayerProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);

    const togglePlaying = () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    // TODO: Add functionality to pause music when clicked outside. 

    return (
        <div>
            <audio ref={audioRef}>
                <source src={src} type="audio/mpeg" />
                {/* Your browser does not support the audio element. */}
            </audio>
            <button onClick={togglePlaying}>{playing ? "Pause music" : "Play music"}</button>
        </div>
    );
};

export default Player;
