import { Button, VStack, Box, Flex, Spacer, HStack, Text, Heading, SimpleGrid, FormControl, FormLabel, Input, FormHelperText, Textarea, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

  const toast = useToast()

  const [state, handleSubmit] = useForm("mdoropjp");
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [succeeded, setSucceeded] = useState(false);

  function addToast() {
    toast({
      title: 'Message sent.',
      description: "I will reply to you as soon as possible!",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  };

  useEffect(() => {
    if (state.succeeded) {
      setEmail('');
      setMessage('');
      addToast()
    }
  }, [state.succeeded]);

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

        <Box mt="10" pb="178px" width="100%">
          <Form ml="0" p="5px" onSubmit={handleSubmit}>

            <FormControl mt="10px">
              <FormLabel htmlFor="email"> Email: </FormLabel>
              <Input focusBorderColor='blue.600' id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></Input>
              <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </FormControl>

            <FormControl mt="10px">
              <FormLabel> Message: </FormLabel>
              <Textarea focusBorderColor='blue.600' id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></Textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </FormControl>

            <Button type="submit" loadingText='Submitting' colorScheme="blue" variant='solid' mt="30px" disabled={state.submitting}>
            Submit
            </Button>

          </Form>

        </Box>
      </VStack>

    </SimpleGrid>
  );
}