import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Flex, Image, HStack, Box} from "@chakra-ui/react";

const Projects = () => {
    return ( 
        <SimpleGrid columns={2} spacing={10} zIndex="1">
            <Card maxHeight="600px">
                <CardHeader>
                    <Flex>
                        <Text>card header</Text>
                    </Flex>
                </CardHeader>

                <Image src="/public/img/luigi.png" alt="Image" minWidth="85%" maxWidth="90%" maxHeight="30%" objectFit="cover" borderRadius="xl" mx="auto"/>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero accusamus cupiditate magni placeat unde tempora, rem obcaecati commodi quod esse dolore quisquam provident quam fugiat ut voluptatem alias laboriosam!</Text>
                </CardBody>

                <CardFooter>
                    <HStack>
                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>
                    </HStack>
                </CardFooter>
            </Card>

            <Card maxHeight="600px">
                <CardHeader>
                    <Flex>
                        <Text>card header</Text>
                    </Flex>
                </CardHeader>

                <Image src="/public/img/luigi.png" alt="Image" minWidth="85%" maxWidth="90%" maxHeight="30%" objectFit="cover" borderRadius="xl" mx="auto"/>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero accusamus cupiditate magni placeat unde tempora, rem obcaecati commodi quod esse dolore quisquam provident quam fugiat ut voluptatem alias laboriosam!</Text>
                </CardBody>

                <CardFooter>
                    <HStack>
                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>
                    </HStack>
                </CardFooter>
            </Card>

            <Card maxHeight="600px">
                <CardHeader>
                    <Flex>
                        <Text>card header</Text>
                    </Flex>
                </CardHeader>

                <Image src="/public/img/luigi.png" alt="Image" minWidth="85%" maxWidth="90%" maxHeight="30%" objectFit="cover" borderRadius="xl" mx="auto"/>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero accusamus cupiditate magni placeat unde tempora, rem obcaecati commodi quod esse dolore quisquam provident quam fugiat ut voluptatem alias laboriosam!</Text>
                </CardBody>

                <CardFooter>
                    <HStack>
                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>
                    </HStack>
                </CardFooter>
            </Card>

            <Card maxHeight="600px">
                <CardHeader>
                    <Flex>
                        <Text>card header</Text>
                    </Flex>
                </CardHeader>

                <Image src="/public/img/luigi.png" alt="Image" minWidth="85%" maxWidth="90%" maxHeight="30%" objectFit="cover" borderRadius="xl" mx="auto"/>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero accusamus cupiditate magni placeat unde tempora, rem obcaecati commodi quod esse dolore quisquam provident quam fugiat ut voluptatem alias laboriosam!</Text>
                </CardBody>

                <CardFooter>
                    <HStack>
                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>

                        <Box borderRadius={10} width="80px" height="40px" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
                            <Text fontWeight="normal" fontFamily='body' fontSize="13px" color="gray.600">Javascript</Text>
                        </Box>
                    </HStack>
                </CardFooter>
            </Card>

        </SimpleGrid>
     );
}
 
export default Projects;