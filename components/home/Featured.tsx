import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React, { useContext } from "react";
import { Posts } from "../../pages";

type Post = {
    featured: boolean;
};

const Featured = () => {
    const { posts } = useContext(Posts);
    const featured = posts.find((post: Post) => post.featured === true);

    return (
        <Box my={10} p={{ base: 5, lg: 10 }}>
            <Flex my={8} gap={10} wrap="wrap" justifyContent="center">
                <Box w="100%" maxW="45rem" h="sm" pos="relative">
                    <Image
                        src={featured.coverImage.url}
                        alt={featured.coverImage.fileName}
                        layout="fill"
                    />
                </Box>
                <Box w="100%" maxW="sm">
                    <Text py={2} color="blackAlpha.700">
                        {new Date(featured.updatedAt).toDateString()}
                    </Text>
                    <NextLink href={"/" + featured.slug}>
                        <Link fontSize="1.35rem" fontWeight="500">
                            {featured.title}
                        </Link>
                    </NextLink>
                    <Text noOfLines={4} color="blackAlpha.700">
                        {featured.excerpt}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Featured;
