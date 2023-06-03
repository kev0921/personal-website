import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Flex } from "@chakra-ui/react";

const Projects = () => {
    return ( 
        <SimpleGrid columns={2} mt="80px" spacing={10} zIndex="1">
            <Card>
                <CardHeader>
                    <Flex>
                        <Text>card header</Text>
                    </Flex>
                </CardHeader>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero accusamus cupiditate magni placeat unde tempora, rem obcaecati commodi quod esse dolore quisquam provident quam fugiat ut voluptatem alias laboriosam!</Text>
                </CardBody>

                <CardFooter>

                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Flex>
                        <Text>card header</Text>
                    </Flex>
                </CardHeader>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero accusamus cupiditate magni placeat unde tempora, rem obcaecati commodi quod esse dolore quisquam provident quam fugiat ut voluptatem alias laboriosam!</Text>
                </CardBody>

                <CardFooter>

                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Flex>
                        <Text>card header</Text>
                    </Flex>
                </CardHeader>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero accusamus cupiditate magni placeat unde tempora, rem obcaecati commodi quod esse dolore quisquam provident quam fugiat ut voluptatem alias laboriosam!</Text>
                </CardBody>

                <CardFooter>

                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Flex>
                        <Text>card header</Text>
                    </Flex>
                </CardHeader>

                <CardBody fontWeight="normal" fontSize="20px" color="gray.600">
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero accusamus cupiditate magni placeat unde tempora, rem obcaecati commodi quod esse dolore quisquam provident quam fugiat ut voluptatem alias laboriosam!</Text>
                </CardBody>

                <CardFooter>

                </CardFooter>
            </Card>

        </SimpleGrid>
     );
}
 
export default Projects;