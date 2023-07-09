import { VStack, Box, Flex, Spacer, Card, Image, CardFooter, HStack, Text, Heading, SimpleGrid } from "@chakra-ui/react";

export default function About() {
  return (
    <VStack ml="200px" mr="200px" mt="120px">
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Heading>
            About me. 
          </Heading>

          <Text lineHeight={1.7} mt="10px" fontSize={18} pt="5px" pb="10px">
            Hello! My name is Kevin Hu, and I am currently a second year student studying Computer Science at University of Toronto St. George. 
          </Text>

          <Text lineHeight={1.7} mt="10px" fontSize={18} pb="10px">
            My favourite things to do on my free time is playing basketball and volleyball, going to the gym, going out with friends, running, and watching anime. 
          </Text>

          <Text lineHeight={1.7} mt="10px" fontSize={18} pb="10px">
            Here's a list of my top 10 songs {'('}in no particular order{')'}:
          </Text>

        </Box>

        <Box>
            <Card maxHeight="700px" borderRadius={20} boxShadow={"lg"}>
                <Image src="/public/img/Me.jpeg" alt="Image" minWidth="100%" maxWidth="100%" maxHeight="30%" objectFit="cover" borderRadius="xl"/>
            </Card>
        </Box>
      </SimpleGrid>
    </VStack>
  )
}
