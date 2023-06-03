import { SimpleGrid, Box, useColorMode } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const TypingAnimation = () => {
    const text = "Hi, my name is Kevin and I am a UofT student";
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
  

  return (
    <Box ml="150px" mr = "150px" fontSize="50px" pt="70px" bg={colorMode === "dark" ? "black" : "rgba(255, 255, 255, 0.5)"} transition="color, background-color 0.3s ease-out!important">
      <TypingAnimation />
      Home 
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa assumenda obcaecati dignissimos doloribus debitis illo velit, totam cupiditate, voluptas quas voluptatum magni pariatur consectetur sint veniam earum quasi. Fuga, voluptate.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit culpa nostrum qui dignissimos nesciunt laborum dolorum quae eveniet architecto quas officiis vel velit quis, ipsa blanditiis quibusdam! Doloremque, perferendis.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ex aliquam voluptate minima nobis in, commodi a expedita sint veritatis. Minima totam porro non aliquid provident quasi tempora, fugiat ab?
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, natus inventore similique vero, temporibus amet in recusandae esse velit eos ipsa quasi accusamus labore laudantium obcaecati aliquid ea fuga vel!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero, quod qui, quam optio amet, vitae consequatur illum expedita quibusdam ut debitis laborum incidunt saepe dolorum laudantium maxime? Quibusdam, adipisci!
    </Box>
  )
}
