import { SimpleGrid, Box, useColorMode, Heading, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Introduction from "../components/Introduction";
import VerticalTimeline from "../components/Timeline";
import Projects from "../components/Projects";
import Timeline from "../components/TestTimeline.";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

// TYPING ANIMATION
  const TypingAnimation = () => {
    const text = "Hey, my name is Kevin and I'm a UofT student.";
    const [typedText, setTypedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
  
    useEffect(() => {
      let currentText = "";
      let currentIndex = 0;
  
      const typingInterval = setInterval(() => {
        currentText += text[currentIndex];
        setTypedText(currentText);
        currentIndex++;
  
        if (currentIndex === text.length) {
          clearInterval(typingInterval);
          setShowCursor(true); // Show cursor after typing animation is complete
        }
      }, 50); // Adjust the typing speed by changing the interval duration
  
      // Blink cursor
      const cursorInterval = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, 500); // Adjust the blinking speed by changing the interval duration
  
      return () => {
        clearInterval(typingInterval); // Clear typing interval on component unmount
        clearInterval(cursorInterval); // Clear cursor interval on component unmount
      };
    }, []);
  
    return (
      <div>
        {typedText}
        {showCursor && <span className="cursor">|</span>}
      </div>
    );
  };
  // TYPING ANIMATION
  

  return (
    <VStack spacing={6} px={[0, 2, 4]} mt={[4, 40]}>
      <Box mt={["90px", "0px"]} maxW={["95%", "70%"]} borderWidth="8px" borderColor="blue.600" p={[6, 8, 20]} borderStyle="double">
        <Box fontSize={["30px", "40px"]} fontWeight="bold" minW={["95%", "80%"]}>
          <TypingAnimation/>
        </Box>
        <Introduction/>
      </Box>

      <Heading alignSelf="flex-start" ml={["5%", "15%"]} mr={["auto", "auto"]} mt={["250px", "150px"]} color="blue.600" fontSize={[45, 50, 50]}>Experiences</Heading>

      <Box  ml={[0, 0, "15%"]} mr={[0, 0, "15%"]} mt={["5%", "0px", "1.5%"]} pl={["7%", "1rem"]} pr={["7%", "1rem"]}> 
        <VerticalTimeline/>
      </Box>

      <Box mt="1rem" ml={[0, 0, "15%"]} mr={[0, 0, "15%"]} p="1rem" maxW="95%">
        <Projects/>
      </Box>

    </VStack>
    
  )
}
