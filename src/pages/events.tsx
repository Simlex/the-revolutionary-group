import Link from "next/link";
import { FunctionComponent, ReactElement, useRef } from "react";
import EventSection from "../../components/EventsSection";
import styles from '../styles/Home.module.scss'; 
import FullEventsSection from "../../components/FullEventsSection";
import React from "react";

interface EventProps {
 
}

const Event: FunctionComponent<EventProps> = (): ReactElement => {

    return (
        <div className={styles.homepageBody}>
            <FullEventsSection />
        </div>
    );
}

export default Event;