import { Flex, Box, Heading, Spacer, HStack, useColorMode, IconButton, Icon, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };


  const navStyles = {
    position: "fixed",
    height: "60px",
    zIndex: "2",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 10px rgba(128, 128, 128, 0.5)",
    borderRadius: "40px",
    p: "32px",
    mt: "10px",
    width: "90%",
  }

  const iconStyles = {
    display: 'flex', 
    alignItems: 'center',
  }

  const getLinkColor = (path) => {
    if (isActiveLink(path)) {
      return colorMode === "dark" ? (isActiveLink ? "white" : "grey") : (isActiveLink ? "black" : "grey")
    }
    return colorMode === "dark" ? "grey" : "grey";
  };


  return (
    <Flex sx={navStyles} alignItems="center">
        <Heading as="h1" ml="20px">
          <Box mx={8} fontSize="33px" color={colorMode === "dark" ? "blue.500" : "blue.500"} transition="color 0.3s ease, font-weight 0.3s" 
              _hover={{ color: colorMode === "dark" ? "white" : "black"}}>
            <a href="/">Kevin Hu</a>
          </Box>
        </Heading>

        <Spacer />

        <Flex align="center" spacing="100px">

          <Box mx={8} fontSize="20px" color={getLinkColor("/")} transition="color 0.3s ease, font-weight 0.3s" 
          _hover={{ color: colorMode === "dark" ? "white" : "black", fontWeight: "bold"}} fontWeight={isActiveLink("/") ? "bold" : "normal"}>
            <a href="/">Home</a>
          </Box>

          <Box mx={8} fontSize="20px" color={getLinkColor("/About")} transition="color 0.3s ease, font-weight 0.3s" 
          _hover={{ color: colorMode === "dark" ? "white" : "black", fontWeight: "bold"}} fontWeight={isActiveLink("/About") ? "bold" : "normal"}>
            <a href="/About">About Me</a>
          </Box>

          <Box mx={8} fontSize="20px" color={getLinkColor("/Contact")} transition="color 0.3s ease, font-weight 0.3s" 
          _hover={{ color: colorMode === "dark" ? "white" : "black", fontWeight: "bold"}} fontWeight={isActiveLink("/Contact") ? "bold" : "normal"}>
            <a href="/Contact">Contact</a>
          </Box>
        </Flex>

        <Spacer />

        <HStack alignItems="center">
          <Button variant="ghost" onClick={toggleColorMode} mr="50px" transition="background-color 0.3s ease" _hover={{ bg: colorMode === 'dark' ? 'gray.800' : 'gray.200' }}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Box display="flex" alignItems="center" mr="20px">
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

