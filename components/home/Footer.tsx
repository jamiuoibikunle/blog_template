import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Footer = () => {
    return (
        <Box h="100%" bg="#0B4780" py={5}>
            <Box maxW="72rem" m="auto">
                <Text
                    maxW="40rem"
                    py={{ base: 5, md: 10 }}
                    px={{ base: 5, md: 0 }}
                    fontSize={20}
                    color="whiteAlpha.800"
                >
                    DailyRead is a team of dedicated writers that aim to provide
                    readers with the best content they could find on the
                    internet today. We write on latest news and articles ranging
                    from sports to health and national developments.
                </Text>
                <Flex
                    color="white"
                    fontSize={20}
                    gap={10}
                    px={{ base: 5, md: 0 }}
                    my={8}
                >
                    <NextLink href="/about">
                        <Link border="2px" p=".75rem 1rem">
                            About
                        </Link>
                    </NextLink>
                    <NextLink href="/contact">
                        <Link border="2px" p=".75rem 1rem">
                            Contact
                        </Link>
                    </NextLink>
                </Flex>
                <Flex
                    wrap="wrap"
                    my={16}
                    gap={6}
                    fontSize={18}
                    color="whiteAlpha.900"
                    px={{ base: 5, md: 0 }}
                >
                    <Text order={{ base: 3, md: 0 }}>
                        &copy; DailyRead {new Date().getFullYear()}
                    </Text>
                    <Spacer display={{ base: "none", md: "block" }} />
                    <NextLink href="/policy">
                        <Link>Privacy Policy</Link>
                    </NextLink>
                    <NextLink href="/policy">
                        <Link>Terms {"&"} Conditions</Link>
                    </NextLink>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
