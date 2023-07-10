import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Flex, Image, HStack, VStack, Box, useColorMode} from "@chakra-ui/react";

const Projects = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return ( 
        <SimpleGrid columns={2} spacing={10} zIndex="1">
            <Card maxHeight="600px" borderRadius={20} boxShadow={"lg"}>
                <CardHeader>
                    <Flex>
                        <Text as="a" href="https://github.com/Manal-jpg/csc111-group-project">MelodyMatch</Text>
                    </Flex>
                </CardHeader>

                <Image src="/public/img/MelodyMatch.png" alt="Image" minWidth="85%" maxWidth="90%" maxHeight="30%" objectFit="cover" borderRadius="xl" mx="auto"/>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text color={colorMode === "dark" ? "gray.300" : "gray.600"}>MelodyMatch is a spotify song recommendation app. Connect your spotify account to our app and, with a click of a button, generate a list of songs from our database that are taylored to your song preferences!</Text>
                </CardBody>

                <CardFooter>
                    <HStack>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Python</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Spotipy</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Tkinter</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Bottle</Text>
                        </Box>

                    </HStack>
                </CardFooter>
            </Card>

            <Card maxHeight="600px" borderRadius={20} boxShadow={"lg"}>
                <CardHeader>
                    <Flex>
                    <Text as="a" href="https://github.com/kev0921/personal-website">Personal Website</Text>
                    </Flex>
                </CardHeader>

                <Image src="/public/img/PersonalWebsite.png" alt="Image" minWidth="85%" maxWidth="90%" maxHeight="30%" objectFit="cover" borderRadius="xl" mx="auto"/>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text color={colorMode === "dark" ? "gray.300" : "gray.600"}>My personal website where I illustrate my latest projects, my current work experiences, and some fun facts about myself! My website has a contact page if you want to send me message :{")"}</Text>
                </CardBody>

                <CardFooter>
                    <HStack>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">React</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">ChakraUI</Text>
                        </Box>

                    </HStack>
                </CardFooter>
            </Card>

            <Card maxHeight="600px" borderRadius={20} boxShadow={"lg"}>
                <CardHeader>
                    <Flex>
                        <Text>Maze Solver Robot</Text>
                    </Flex>
                </CardHeader>

                <Image src="/public/img/MazeSolverRobot.png" alt="Image" minWidth="85%" maxWidth="90%" maxHeight="30%" objectFit="cover" borderRadius="xl" mx="auto"/>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text color={colorMode === "dark" ? "gray.300" : "gray.600"}>Using Arduino robot parts and the Arduino IDE, I created a robot that is able to solve simple mazes using data gathered by its ultrasonic sensor.</Text>
                </CardBody>

                <CardFooter>
                    <HStack>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">C++</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Arduino</Text>
                        </Box>

                    </HStack>
                </CardFooter>
            </Card>

            <Card maxHeight="600px" borderRadius={20} boxShadow={"lg"}>
                <CardHeader>
                    <Flex>
                        <Text as="a" href="https://github.com/jaeyonglee3/RCHRA-Website">Club Website</Text>
                    </Flex>
                </CardHeader>

                <Image src="/public/img/ClubWebsite.png" alt="Image" minWidth="85%" maxWidth="90%" maxHeight="30%" objectFit="cover" borderRadius="xl" mx="auto"/>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text color={colorMode === "dark" ? "gray.300" : "gray.600"}>This is the website I created with a team of web developers for the RCHRA club at UofT. This website provides information on upcoming club events, infromation about the club, and more.</Text>
                </CardBody>

                <CardFooter overflow="auto">
                    <VStack mb="10px" pb="10px">
                        <HStack>

                            <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                            </Box>

                            <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Bootstrap</Text>
                            </Box>

                            <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">CSS</Text>
                            </Box>

                            <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">HTML</Text>
                            </Box>

                            <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                                <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">React</Text>
                            </Box>

                        </HStack>

                    </VStack>
                </CardFooter>
            </Card>

        </SimpleGrid>
     );
}
 
export default Projects;