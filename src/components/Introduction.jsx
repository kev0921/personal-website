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
        <Box mt="10px" fontWeight="normal" fontSize={["15px", "18px"]} pt="10px" lineHeight={1.8} color="gray.600">
            <Text mb={5} color={colorMode === "dark" ? "gray.500" : "gray.600"} mr={["2px", "150px"]}>
                Your friendly neighbourhood software developer and student from UofT. As a relatively new software developer, I spend my days exploring new technologies and frameworks to learn on top of my student responsibilities. 
            </Text>

            <Text color={colorMode === "dark" ? "gray.500" : "gray.600"} mr={["2px", "150px"]}>
                When I am not exploring the vast sea that is computer science, I enjoy my time indulging in my favourite hobbies and rocking out to my favourite artists.
            </Text>

            <HStack alignItems="center" mt={["15px", "50px"]} fontWeight="bold" _hover={{ textDecoration: "underline"}} color={colorMode === "dark" ? "gray.400" : "gray.800"} >
                <a href="/About">learn more about me</a>
                <AnimatedArrow/>
            </HStack>
        </Box>
    );
}
 
export default Introduction;