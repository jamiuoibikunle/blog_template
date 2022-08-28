import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useContext } from "react";
import { Posts } from "../../pages";
import NextLink from "next/link";

type Post = {
    coverImage: { url: string; name: string };
    title: string;
    slug: string;
    excerpt: string;
    featured: boolean;
    updatedAt: string;
    content: { html: string };
};

const Articles = () => {
    const { posts } = useContext(Posts);

    return (
        <Box my={10} maxW="72rem" m="auto">
            <Flex
                wrap="wrap"
                gap={5}
                my={10}
                alignItems="center"
                justifyContent={{ base: "center", lg: "space-between" }}
            >
                {posts.map((post: Post, index: number) => {
                    if (post.featured === true) return;

                    return (
                        <Box
                            key={index}
                            h="md"
                            w={{ base: "sm", md: "md" }}
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
                                <Text
                                    dangerouslySetInnerHTML={{
                                        __html: new Date(
                                            post.updatedAt
                                        ).toDateString(),
                                    }}
                                    color="blackAlpha.700"
                                />
                                <NextLink href={"/" + post.slug}>
                                    <Link fontSize="1.35rem" fontWeight="500">
                                        {post.title}
                                    </Link>
                                </NextLink>
                                <Text noOfLines={2} color="blackAlpha.700">
                                    {post.excerpt}
                                </Text>
                            </Box>
                        </Box>
                    );
                })}
            </Flex>
        </Box>
    );
};

export default Articles;
