import { Flex, Box, Heading, Spacer, HStack, useColorMode, IconButton, Icon, Button, ColorModeScript } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();

  const navStyles = {
    position: "fixed",
    bg: colorMode === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.5)",
    height: "60px",
    width: "100%",
    backdropFilter: "blur(10px)",
    transition: "color, background-color 0.3s ease-out!important"
  }

  const iconStyles = {
    display: 'flex', 
    alignItems: 'center',
  }

  return (
    <Flex as="nav" p="10px" alignItems="center" sx={navStyles}>

        <Heading as="h1">
          <Box mx={8} fontSize="35px" color={colorMode === "dark" ? "white" : "black"} transition="color 0.3s ease, font-weight 0.3s" 
              _hover={{ color: colorMode === "dark" ? "blue.500" : "blue.500"}}>
            <a href="/">Kevin Hu</a>
          </Box>
        </Heading>

        <Spacer />

        <HStack>
          <Flex align="center" spacing="100px">

            <Box mx={8} fontSize="20px" color={colorMode === "dark" ? "white" : "grey"} transition="color 0.3s ease, font-weight 0.3s" 
            _hover={{ color: colorMode === "dark" ? "grey" : "black"}}>
              <a href="/">Home</a>
            </Box>

            <Box mx={8} fontSize="20px" color={colorMode === "dark" ? "white" : "grey"} transition="color 0.3s ease, font-weight 0.3s" 
            _hover={{ color: colorMode === "dark" ? "grey" : "black"}}>
              <a href="/About">About Me</a>
            </Box>

            <Box mx={8} fontSize="20px" color={colorMode === "dark" ? "white" : "grey"} transition="color 0.3s ease, font-weight 0.3s" 
            _hover={{ color: colorMode === "dark" ? "grey" : "black"}}>
              <a href="/Contact">Contact</a>
            </Box>
          </Flex>
        </HStack>

        <Spacer />

        <HStack spacing="50px" alignItems="center">
          <Button variant="ghost" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        <Box display="flex" alignItems="center">
          <a href="https://www.instagram.com/kevinhu04/" style={iconStyles}>
            <Icon as={FaFacebook} boxSize={6} mr={5} color={colorMode === "dark" ? "white" : "black"} transition="color 0.3s ease" _hover={{ color: 'blue' }}/>
          </a>
          <a href="https://www.instagram.com/kevinhu04/" style={iconStyles}>
            <Icon as={FaTwitter} boxSize={6} mr={5} color={colorMode === "dark" ? "white" : "black"} transition="color 0.3s ease" _hover={{ color: 'skyblue' }} />
          </a>
          <a href="https://www.instagram.com/kevinhu04/" style={iconStyles}>
            <Icon as={FaInstagram} boxSize={6} color={colorMode === "dark" ? "white" : "black"} transition="color 0.3s ease" _hover={{ color: '#FF69B4' }}/>
          </a>
        </Box>
        </HStack>       

    </Flex>
  )
}

