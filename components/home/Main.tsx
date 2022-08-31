import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Articles from "./Posts";
import Header from "./Header";
import Featured from "./Featured";
import Footer from "./Footer";

const Main = () => {
    return (
        <Box>
            <Head>
                <title>DailyRead</title>
            </Head>
            <Header />
            <Featured />
            <Articles />
            <Footer />
        </Box>
    );
};

export default Main;
