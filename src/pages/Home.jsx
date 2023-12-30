import { SimpleGrid, Box, useColorMode, Heading, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Introduction from "../components/Introduction";
import VerticalTimeline from "../components/Timeline";
import Projects from "../components/Projects";
import Timeline from "../components/TestTimeline.";
import TestTimeline from "../components/TestTimeline.";
import TestProjects from '../components/TestProjects';
import SpotifyPlayer from "../components/SpotifyPlayer";

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
    <VStack spacing={6} px={[0, 2, "auto"]} mt={[4, 10]} mx="auto">
      <Box mt={["90px", "0px"]} maxW={["95%", "50%"]} p={[6, 8, "0px"]}>
        <Box fontSize={["30px", "35px", "40px"]} fontWeight="bold" color="blue.600">
          <TypingAnimation/>
        </Box>
        <Introduction/>
      </Box>

      <SpotifyPlayer client_id={process.env.CLIENT_ID} client_secret={process.env.CLIENT_SECRET} refresh_token={process.env.REFRESH_TOKEN}></SpotifyPlayer>

      <Box w="100%" mx="auto" px="auto"> 
        <TestTimeline/>
      </Box>

      <Box mt="1rem" ml={[0, 0, "15%"]} mr={[0, 0, "15%"]} p="1rem" maxW="95%">
        <TestProjects/>
      </Box>

    </VStack>
    
  )
}
