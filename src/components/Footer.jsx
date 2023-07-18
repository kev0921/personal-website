import { HStack, Box, Text, Flex, Spacer, Heading } from "@chakra-ui/react";
import { Grid, GridItem, useColorMode, Icon } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const iconStyles = {
        display: 'flex', 
        alignItems: 'center',
      }

    return ( 
        <Flex alignItems="center" p={["5px", "25px"]} borderTop="1px" borderColor="gray.300" mt={["30px","50px"]}
        borderStyle="solid" ml={["0%", "12%"]} mr={["0%", "12%"]} width="100%">
            <Box whitespace="nowrap" mx={8} fontWeight="bold" color={colorMode === "dark" ? "blue.500" : "blue.500"} transition="color 0.3s ease, font-weight 0.3s" 
                _hover={{ color: colorMode === "dark" ? "white" : "black"}}>
                <Text textAlign="left" fontWeight="bold" fontSize={["20px", "30px"]}>
                    <a href="/">Kevin Hu</a>
                </Text>
            </Box>

            <Spacer/>

            <Text textAlign="center" fontFamily="initial" fontSize={["0px", "18px"]}>
                Created by me :{")"}
            </Text>

            <Spacer/>

            <Flex>

                <a href="https://www.linkedin.com/in/kevinhu04/" style={iconStyles}>
                    <Icon as={BsLinkedin} boxSize={6} mr={[2.5, 5]} color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }}/>
                </a>

                <a href="https://github.com/kev0921" style={iconStyles}>
                    <Icon as={DiGithubBadge} boxSize={10} mr={[2.5, 5]} color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }} />
                </a>

                <a href="https://www.instagram.com/kevinhu04/" style={iconStyles}>
                    <Icon as={FaInstagram} boxSize={7} mr={[2.5, 0]}color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }}/>
                </a>

          </Flex>
        </Flex>
     );
}
 
export default Footer;