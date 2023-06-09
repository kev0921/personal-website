import { VStack, Box, Flex, Spacer, Card, Image, CardFooter, HStack, Text, Heading, SimpleGrid, List, ListItem, ListIcon } from "@chakra-ui/react";
import {  BsFillFileEarmarkMusicFill } from "react-icons/bs";

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

          <Text lineHeight={1.7} mt="70px" fontSize={18} pb="10px" fontWeight="bold">
            List of my top 5 favourite songs:
          </Text>

          <List spacing={5} p="5px" mt="10px">

            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={BsFillFileEarmarkMusicFill} color='blue.500' />
                <Text whiteSpace="nowrap" fontSize={18}>Payphone</Text>
                <Text whiteSpace="nowrap" fontSize={15} ml="200px">Maroon 5, Wiz Khalifa</Text>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={BsFillFileEarmarkMusicFill} color='blue.500' />
                <Text whiteSpace="nowrap" fontSize={18}>Love Yourz</Text>
                <Text whiteSpace="nowrap" fontSize={15} ml="299px">J.Cole</Text>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={BsFillFileEarmarkMusicFill} color='blue.500' />
                <Text whiteSpace="nowrap" fontSize={18}>Sparks Fly</Text>
                <Text whiteSpace="nowrap" fontSize={15} ml="265px">Taylor Swift</Text>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={BsFillFileEarmarkMusicFill} color='blue.500' />
                <Text whiteSpace="nowrap" fontSize={18}>Bad Habit</Text>
                <Text whiteSpace="nowrap" fontSize={15} ml="275px">Steve Lacy</Text>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={BsFillFileEarmarkMusicFill} color='blue.500' />
                <Text whiteSpace="nowrap" fontSize={18}>Reminder</Text>
                <Text whiteSpace="nowrap" fontSize={15} ml="266px">The Weeknd</Text>
              </Flex>
            </ListItem>

          </List>

        </Box>

        <Box>
            <Card maxHeight="700px" borderRadius={20} boxShadow={"lg"} transition="box-shadow 0.3s ease-in-out">
                <Image src="/public/img/Me.jpeg" alt="Image" minWidth="100%" maxWidth="100%" maxHeight="30%" objectFit="cover" borderRadius="xl"/>
            </Card>
        </Box>
      </SimpleGrid>
    </VStack>
  )
}
