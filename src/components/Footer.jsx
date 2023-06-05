import { HStack, Box, Text, Flex, Spacer, Heading } from "@chakra-ui/react";
import { Grid, GridItem, useColorMode, Icon } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const iconStyles = {
        display: 'flex', 
        alignItems: 'center',
      }

    return ( 
        <HStack alignItems="center" p="25px" display="flex" borderTop="1px" borderColor="gray.300" mt="50px" spacing={280}
        borderStyle="solid" ml="200px" mr="200px">
            <Box whitespace="nowrap" mx={8} fontWeignt="bold" fontSize="25px" color={colorMode === "dark" ? "blue.500" : "blue.500"} transition="color 0.3s ease, font-weight 0.3s" 
                _hover={{ color: colorMode === "dark" ? "white" : "black"}}>
                <Heading alignItems="center" fontSize="30px">
                    <a href="/">Kevin Hu</a>
                </Heading>
            </Box>

            <Text justifyContent="center" fontFamily="initial" fontSize="18px">
                Created by me :{")"}
            </Text>

            <Box display="flex">
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
     );
}
 
export default Footer;