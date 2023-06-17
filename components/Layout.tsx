import Head from "next/head";
import { FunctionComponent, ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../src/styles/Layout.module.scss'
import MobileFooter from "./MobileFooter";
import { PageProps } from "../models/PageProps";

interface LayoutProps {
    children?: React.ReactNode;
    props: PageProps
}

const Layout: FunctionComponent<LayoutProps> = ({ children, props: pageProps }): ReactElement => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100&display=swap"
                />
            </Head>
            <Navbar props={pageProps} />
            <div className={styles.innerPage}>
                {children}
                <MobileFooter props={pageProps} />
            </div>
            <Footer />
        </>
    );
}

export default Layout;