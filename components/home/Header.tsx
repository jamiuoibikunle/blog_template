import { Box, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = () => {
    return (
        <Box>
            <Flex gap={5} justifyContent="space-between" alignItems="center">
                <Heading as="h1" fontWeight="500">
                    bigcast
                </Heading>
                <Spacer />
                <IconButton
                    bg="none"
                    aria-label="Hamburger"
                    icon={<HiOutlineMenuAlt1 size="1.75rem" />}
                />
            </Flex>
        </Box>
    );
};

export default Header;
