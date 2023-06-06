import { VStack, Box, Flex, Spacer, Card, Image, CardFooter, HStack, Text, Heading, SimpleGrid } from "@chakra-ui/react";

export default function About() {
  return (
    <VStack ml="200px" mr="200px" mt="120px">
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Heading>
            About me. 
          </Heading>
          <Text lineHeight={1.7} mt="10px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita libero excepturi optio asperiores ut rerum dolor neque velit nam perspiciatis veniam maiores numquam repudiandae natus consequatur, ea aperiam sint?
          </Text>
        </Box>

        <Box>
            <Card maxHeight="700px" borderRadius={20} boxShadow={"lg"}>
                <Image src="/public/img/luigi.png" alt="Image" minWidth="100%" maxWidth="100%" maxHeight="30%" objectFit="cover" borderRadius="xl"/>

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
        </Box>
      </SimpleGrid>
    </VStack>
  )
}
