import {
    Box,
    Circle,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    Link,
    Show,
    Spacer,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRef } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <Box backgroundImage="/bg.svg" backgroundRepeat="no-repeat" h="40rem">
            <Flex
                gap={5}
                justifyContent="space-between"
                alignItems="center"
                px={{ base: 4, lg: 10 }}
                py={10}
            >
                <Flex alignItems="center" gap={2} flex={1}>
                    <Circle bg="whiteAlpha.900" size={8} />
                    <Heading
                        as="h1"
                        fontSize="1.3rem"
                        fontWeight="500"
                        color="whiteAlpha.900"
                    >
                        DailyRead
                    </Heading>
                </Flex>
                <Spacer />
                <Show breakpoint="(min-width: 768px)">
                    <Flex
                        color="whiteAlpha.900"
                        w="30rem"
                        justifyContent="space-between"
                    >
                        <NextLink href="/">
                            <Link
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                Home
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                Services
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                About
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                Contact
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                Subscribe
                            </Link>
                        </NextLink>
                    </Flex>
                </Show>
                <Show breakpoint="(max-width: 767px)">
                    <IconButton
                        aria-label="Menu"
                        colorScheme="none"
                        ref={btnRef}
                        onClick={onOpen}
                    >
                        <HiOutlineMenuAlt1 size="1.5rem" />
                    </IconButton>
                </Show>
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent
                        p={4}
                        bg="#1C5489"
                        color="whiteAlpha.900"
                        fontSize="1.2rem"
                        fontWeight="300"
                    >
                        <DrawerCloseButton my={4} mr={2} size="1.3rem" />
                        <Flex
                            display="flex"
                            gap={2}
                            alignItems="center"
                            fontSize="1.5rem"
                            fontWeight="500"
                            mb={5}
                        >
                            <Circle bg="whiteAlpha.900" size={5} />
                            DailyRead
                        </Flex>
                        <NextLink href="/">
                            <Link
                                ml={7}
                                py={1}
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                Home
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link
                                ml={7}
                                py={1}
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                Services
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link
                                ml={7}
                                py={1}
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                About
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link
                                ml={7}
                                py={1}
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                Contact
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link
                                ml={7}
                                py={1}
                                transition=".5s"
                                _hover={{
                                    color: "whiteAlpha.700",
                                }}
                            >
                                Subscribe
                            </Link>
                        </NextLink>
                    </DrawerContent>
                </Drawer>
            </Flex>
            <Box p={5} my={10}>
                <Text
                    fontSize="2rem"
                    fontWeight="500"
                    maxW="40rem"
                    mx="auto"
                    color="white"
                    textAlign="center"
                >
                    Discover Premium Articles and Latest News Across Nigeria
                </Text>
                <Text
                    maxW="35rem"
                    my={5}
                    mx="auto"
                    textAlign="center"
                    color="whiteAlpha.700"
                >
                    We break the latest news across the country and give you
                    uncompromised content to freshen your mind
                </Text>
            </Box>
        </Box>
    );
};

export default Header;
