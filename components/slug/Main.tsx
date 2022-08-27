import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import styles from "./main.module.css";

const Main = ({ post: { post } }: any) => {
    const mins = Math.ceil(post.content.html.split(" ").length / 230);
    return (
        <Box w="95%" maxW="60rem" m="auto">
            <Head>
                <title>{post.title}</title>
            </Head>
            <Heading
                my={10}
                as="h1"
                textAlign="center"
                fontSize="1.5rem"
                fontWeight="500"
            >
                {post.title}
            </Heading>
            <Flex gap={5}>
                <Text>{new Date(post.updatedAt).toDateString()}</Text>
                <Divider orientation="vertical" />
                <Text>{mins} mins read</Text>
            </Flex>
            <Box
                w="100%"
                h={{ base: "20rem", lg: "30rem" }}
                pos="relative"
                my={5}
            >
                <Image
                    src={post.coverImage.url}
                    alt={post.coverImage.name}
                    layout="fill"
                />
            </Box>
            <Box
                dangerouslySetInnerHTML={{ __html: post.content.html }}
                className={styles.content}
            />
        </Box>
    );
};

export default Main;
