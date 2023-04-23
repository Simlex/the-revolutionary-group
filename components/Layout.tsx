import Head from "next/head";
import { FunctionComponent, ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../src/styles/Layout.module.scss'

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100&display=swap"
                />
            </Head>
            <Navbar />
            <div className={styles.innerPage}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;