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
        <HStack alignContent="center" p={["5px", "25px"]} borderTop="1px" borderColor="gray.300" mt={["30px","50px"]}
        borderStyle="solid" ml={["2px", "200px"]} mr={["2px", "200px"]}>
            <Box whitespace="nowrap" mx={8} fontWeignt="bold" color={colorMode === "dark" ? "blue.500" : "blue.500"} transition="color 0.3s ease, font-weight 0.3s" 
                _hover={{ color: colorMode === "dark" ? "white" : "black"}} mr={["5%", "27%"]} ml={["5%", "5%"]}>
                <Text textAlign="left" alignItems="center" fontWeight="bold" fontSize={["20px", "30px"]}>
                    <a href="/">Kevin Hu</a>
                </Text>
            </Box>

            <Text textAlign="center" fontFamily="initial" fontSize={["14px", "18px"]} mr={["5%", "27%"]}>
                Created by me :{")"}
            </Text>

            <Box display="flex" alignItems="center">

                <a href="https://www.linkedin.com/in/kevinhu04/" style={iconStyles}>
                    <Icon as={BsLinkedin} boxSize={6} mr={[2.5, 5]} color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }}/>
                </a>

                <a href="https://github.com/kev0921" style={iconStyles}>
                    <Icon as={DiGithubBadge} boxSize={10} mr={[2.5, 5]} color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }} />
                </a>

                <a href="https://www.instagram.com/kevinhu04/" style={iconStyles}>
                    <Icon as={FaInstagram} boxSize={7} mr={[2.5, 0]}color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }}/>
                </a>

          </Box>
        </HStack>
     );
}
 
export default Footer;