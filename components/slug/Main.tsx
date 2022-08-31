import { Avatar, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../home/Footer";

import styles from "./main.module.scss";

const Main = ({ post: { post } }: any) => {
    const mins = Math.ceil(post.content.html.split(" ").length / 230);
    console.log(post);
    return (
        <Box>
            <Box w="95%" maxW="60rem" m="auto">
                <Head>
                    <title>{post.title}</title>
                </Head>
                <Heading
                    my={10}
                    as="h1"
                    textAlign="center"
                    fontSize="2.25rem"
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
                <Flex
                    bg="blackAlpha.50"
                    alignItems="center"
                    my={20}
                    p={5}
                    gap={8}
                >
                    <Avatar
                        name={post.author.name}
                        src={post.author.picture.url}
                        size="2xl"
                    />
                    <Box>
                        <Heading as="h2" fontSize="1.5rem">
                            {post.author.name}
                        </Heading>
                        <Text fontSize="1.4rem">
                            {post.author.biography || ""}
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Footer />
        </Box>
    );
};

export default Main;
