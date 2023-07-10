import { SimpleGrid, Box, useColorMode, Text, HStack, Icon } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { keyframes } from "@emotion/react";

const Introduction = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const arrowAnimation = keyframes`
        0% {
        transform: translateX(0);
        }
        50% {
        transform: translateX(8px);
        }
        100% {
        transform: translateX(0);
        }
        `;
  
    const AnimatedArrow = () => (
        <Icon as={ArrowForwardIcon} boxSize={4} animation={`${arrowAnimation} 1s infinite`}/>
    );

    return ( 
        <Box mt="10px" fontWeight="normal" fontSize="18px" pt="10px" lineHeight={1.8} color="gray.600">
            <Text mb={5} color={colorMode === "dark" ? "gray.500" : "gray.600"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde delectus hic accusantium earum expedita fugiat. Accusantium rem atque saepe nulla ab ad impedit architecto voluptatem reiciendis. Error molestiae officiis quo!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </Text>

            <Text color={colorMode === "dark" ? "gray.500" : "gray.600"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde delectus hic accusantium earum expedita fugiat. Accusantium rem atque saepe nulla ab ad impedit architecto voluptatem reiciendis. Error molestiae officiis quo!
            </Text>

            <HStack alignItems="center" mt={70} fontWeight="bold" _hover={{ textDecoration: "underline"}} color={colorMode === "dark" ? "gray.400" : "gray.800"} >
                <a href="/About">learn more about me</a>
                <AnimatedArrow/>
            </HStack>
        </Box>
    );
}
 
export default Introduction;