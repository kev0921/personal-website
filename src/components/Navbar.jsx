import { Flex, Box, Heading, Spacer, HStack } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
        <Heading as="h1">Kevin Hu</Heading>

        <Spacer />

        <HStack spacing="100px">
          <Flex align="center">
            <Box mx={2}>
              <a href="/">Home</a>
            </Box>
            <Box mx={2}>
              <a href="/About">About Me</a>
            </Box>
            <Box mx={2}>
              <a href="/Contact">Contact</a>
            </Box>
          </Flex>
        </HStack>

        <Spacer />

        <HStack spacing="20px">
        <Box>
          <Icon as={FaFacebook} boxSize={6} mr={2} style={{ color: 'blue', fontSize: '24px' }} />
          <Icon as={FaTwitter} boxSize={6} mr={2} style={{ color: 'skyblue', fontSize: '20px' }} />
          <a href="https://www.instagram.com/kevinhu04/">
            <Icon as={FaInstagram} boxSize={6} style={{ color: "#FF69B4", fontSize: '18px' }} />
          </a>
        </Box>
        </HStack>       

    </Flex>
  )
}

