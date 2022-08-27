import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Articles from "./Posts";
import Header from "./Header";

const Main = () => {
    return (
        <Box w="95%" maxW="75rem" m="2rem auto">
            <Head>
                <title>Bigcast</title>
            </Head>
            <Header />
            <Articles />
        </Box>
    );
};

export default Main;
