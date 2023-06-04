import { SimpleGrid, Box, useColorMode } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Introduction from "../components/Introduction";
import VerticalTimeline from "../components/Timeline";
import Projects from "../components/Projects";

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
    <Box>
      <Box mt="160px" ml="180px" mr="180px" pt="70px" pb="70px" pl="120px" pr="120px" borderWidth="10px" borderColor="blue.600" borderStyle="double">
        <Box fontSize="40px" fontWeight="bold">
          <TypingAnimation/>
        </Box>
        <Introduction/>
      </Box>

      <Box mt="150px" ml="250px" mr="250px" mb="0px" p="50px" fontSize="40px">
        <VerticalTimeline/>
      </Box>

      <Box mt="20px" ml="250px" mr="250px" p="20px" fontSize="40px" fontWeight="bold">
        <Projects/>
      </Box>

    </Box>
    
  )
}
