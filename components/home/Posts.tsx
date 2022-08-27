import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useContext } from "react";
import { Posts } from "../../pages";
import NextLink from "next/link";

type Post = {
    coverImage: { url: string; name: string };
    title: string;
    slug: string;
};

const Articles = () => {
    const { posts } = useContext(Posts);

    return (
        <Box my={10}>
            <Heading as="h2" fontWeight="500" fontSize="1.5rem">
                Latest articles
            </Heading>
            <Flex
                wrap="wrap"
                gap={5}
                my={10}
                alignItems="center"
                justifyContent="space-between"
            >
                {posts.map((post: Post, index: number) => {
                    return (
                        <Box
                            key={index}
                            h="sm"
                            w="sm"
                            border="1px solid #e2e8f0"
                            bg="#f1f5f9"
                        >
                            <Box height="60%" w="100%" pos="relative">
                                <Image
                                    src={post.coverImage.url}
                                    alt={post.coverImage.name}
                                    layout="fill"
                                />
                            </Box>
                            <Box h="40%" p={5}>
                                <NextLink href={"/" + post.slug}>
                                    <Link fontSize="1.2rem" fontWeight="500">
                                        {post.title}
                                    </Link>
                                </NextLink>
                            </Box>
                        </Box>
                    );
                })}
            </Flex>
        </Box>
    );
};

export default Articles;
