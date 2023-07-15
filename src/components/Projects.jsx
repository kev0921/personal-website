import { Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Flex, Image, HStack, Stack, Box, useColorMode, Icon, Button } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";


const Projects = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return ( 
        <Box>
            <Heading color="blue.600" textDecoration="none" fontSize="45px" mb="50px">Projects and Resume</Heading>

            <SimpleGrid columns={[1, 2]} spacing={10} zIndex="1">

                <Card minHeight="550px" maxHeight="600px" borderRadius={20} boxShadow={"lg"}>

                    <Image src="/public/img/MelodyMatch.png" alt="Image" minWidth="100%" maxWidth="100%" minHeight="40%" maxHeight="50%" objectFit="cover" borderTopRadius="xl" mx="auto"/>

                    <CardBody fontWeight="normal" fontSize={[17, 20]} color="gray.600">
                        <Stack spacing='2.5'>
                            <Heading>
                                <Flex>

                                    <Text color={colorMode === "dark" ? "white" : "black" }>MelodyMatch</Text>

                                    <a href="https://github.com/Manal-jpg/csc111-group-project" style={{marginLeft: "auto", display: "flex", alignItems: "center"}}>
                                        <Icon as={DiGithubBadge} boxSize={12} ml="auto" color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }}></Icon>
                                    </a>

                                </Flex>
                            </Heading>

                                <Text color={colorMode === "dark" ? "gray.300" : "gray.600"}>MelodyMatch is a spotify song recommendation app. Connect your spotify account to our app and, with a click of a button, generate a list of songs from our database that are taylored to your song preferences!</Text>
                        
                        </Stack>
                    </CardBody>

                    <CardFooter overflow="auto">
                        <HStack>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Python</Text>
                            </Box>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Spotipy</Text>
                            </Box>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Tkinter</Text>
                            </Box>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Bottle</Text>
                            </Box>

                        </HStack>
                    </CardFooter>
                </Card>

                <Card maxHeight="600px" borderRadius={20} boxShadow={"lg"}>

                    <Image src="/public/img/PersonalWebsite.png" alt="Image" minWidth="100%" maxWidth="100%" maxHeight="50%" objectFit="cover" borderTopRadius="xl" mx="auto"/>

                    <CardBody fontWeight="normal" fontSize={[17, 20]} color="gray.600">
                        <Stack spacing="2.5">
                            <Heading>
                                <Flex alignItems="center">

                                    <Text color={colorMode === "dark" ? "white" : "black" }>Personal Website</Text>

                                    <a href="https://github.com/kev0921/personal-website" style={{marginLeft: "auto", display: "flex", alignItems: "center"}}>
                                        <Icon as={DiGithubBadge} ml="auto" boxSize={12} color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }}></Icon>
                                    </a>

                                </Flex>
                            </Heading>

                            <Text color={colorMode === "dark" ? "gray.300" : "gray.600"}>My personal website where I illustrate my latest projects, my current work experiences, and some fun facts about myself! My website has a contact page if you want to send me message :{")"}</Text>

                        </Stack>
                    </CardBody>

                    <CardFooter>
                        <HStack>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">React</Text>
                            </Box>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                            </Box>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">ChakraUI</Text>
                            </Box>

                        </HStack>
                    </CardFooter>
                </Card>

                <Card maxHeight="600px" borderRadius={20} boxShadow={"lg"}>

                    <Image src="/public/img/MazeSolverRobot.png" alt="Image" minWidth="100%" maxWidth="100%" maxHeight="50%" objectFit="cover" borderTopRadius="xl" mx="auto"/>

                    <CardBody fontWeight="normal" fontSize={[17, 20]} color="gray.600">
                        <Stack spacing="2.5">
                            <Heading>
                                <Flex>
                                    <Text color={colorMode === "dark" ? "white" : "black" }>Maze Solver Robot</Text>
                                </Flex>
                            </Heading>

                            <Text color={colorMode === "dark" ? "gray.300" : "gray.600"}>Using Arduino robot parts and the Arduino IDE, I created a robot that is able to solve simple mazes using data gathered by its ultrasonic sensor.</Text>
                        </Stack>
                    </CardBody>

                    <CardFooter>
                        <HStack>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">C++</Text>
                            </Box>

                            <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Arduino</Text>
                            </Box>

                        </HStack>
                    </CardFooter>
                </Card>

                <Card maxHeight="600px" borderRadius={20} boxShadow={"lg"}>

                    <Image src="/public/img/ClubWebsite.png" alt="Image" minWidth="100%" maxWidth="100%" maxHeight="50%" objectFit="cover" borderTopRadius="xl" mx="auto"/>

                    <CardBody fontWeight="normal" fontSize={[17, 20]} color="gray.600">
                        <Stack spacing="2.5">

                            <Heading>
                                <Flex>
                                    <Text color={colorMode === "dark" ? "white" : "black" }>Club Website</Text>

                                    <a href="https://github.com/jaeyonglee3/RCHRA-Website" style={{marginLeft: "auto", display: "flex", alignItems: "center"}}>
                                        <Icon as={DiGithubBadge} ml="auto" boxSize={12} color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }}></Icon>
                                    </a>
                                </Flex>
                            </Heading>

                            <Text color={colorMode === "dark" ? "gray.300" : "gray.600"}>This is the website I created with a team of web developers for the RCHRA club at UofT. This website provides information on upcoming club events, infromation about the club, and more.</Text>

                        </Stack>
                    </CardBody>

                    <CardFooter overflow="auto">
                            <HStack>

                                <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                    <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                                </Box>

                                <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                    <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Bootstrap</Text>
                                </Box>

                                <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                    <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">CSS</Text>
                                </Box>

                                <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                    <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">HTML</Text>
                                </Box>

                                <Box borderRadius={10} width="5rem" height="2.4rem" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                    <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">React</Text>
                                </Box>

                            </HStack>
                    </CardFooter>
                </Card>

            </SimpleGrid>
            
            <Heading mt="60px" mb="5px" size='lg'>My resume:</Heading>
            <a href="public/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button colorScheme="blue">View PDF</Button>
            </a>

        </Box>
     );
}
 
export default Projects;