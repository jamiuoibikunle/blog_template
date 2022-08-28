import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Articles from "./Posts";
import Header from "./Header";
import Featured from "./Featured";

const Main = () => {
    return (
        <Box>
            <Head>
                <title>DailyRead</title>
            </Head>
            <Header />
            <Featured />
            <Articles />
        </Box>
    );
};

export default Main;
