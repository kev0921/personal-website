import { VStack, Box, Flex, Spacer, HStack, Text, Heading, SimpleGrid, FormControl, FormLabel, Input, FormHelperText, Textarea } from "@chakra-ui/react";
import { Form } from 'react-router-dom'

export default function Contact() {
  return (
    <SimpleGrid ml="200px" mr="200px" mt="120px" columns={2}>
      <VStack>
        <Box width="100%">
          <Heading>
            Contact.
          </Heading>
          <Text mt="10px">
            Get in touch with me via social media or email.
          </Text>
        </Box>

        <Box mt="10" width="100%">
          <Form ml="0" p="5px">
            <FormControl>
              <FormLabel> Name: </FormLabel>
              <Input focusBorderColor='blue.600' type="text" name="name"></Input>
            </FormControl>

            <FormControl mt="10px">
              <FormLabel> Email: </FormLabel>
              <Input focusBorderColor='blue.600' type="email" name="email"></Input>
            </FormControl>

            <FormControl mt="10px">
              <FormLabel> Message: </FormLabel>
              <Textarea focusBorderColor='blue.600' name="message"></Textarea>
            </FormControl>
          </Form>
        </Box>
      </VStack>

    </SimpleGrid>
  )
}
