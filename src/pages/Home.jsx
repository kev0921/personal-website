import { SimpleGrid, Box, useColorMode, Heading, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Introduction from "../components/Introduction";
import TestTimeline from "../components/TestTimeline.";
import TestProjects from '../components/TestProjects';
import SpotifyPlayer from "../components/SpotifyPlayer";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const spotifyPlayerStyles = {
    app: {
      textAlign: "center",
    },
    appLogo: {
      height: "40vmin",
      pointerEvents: "none",
    },
    appHeader: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",
    },
    appLink: {
      color: "#61dafb",
    },
    appLogoSpin: {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
    nowPlayingCard: {
      minWidth: "200px",
      maxWidth: "20%",
      margin: "0 auto",
      marginTop: "5%",
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: "13px",
    },
    nowPlayingContainerInner: {
      width: "100%",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      transition: "0.3s",
      display: "inline-block",
      WebkitBorderTopLeftRadius: "3px",
      MozBorderTopLeftRadius: "3px",
      MsBorderTopLeftRadius: "3px",
      OBorderTopLeftRadius: "3px",
      borderTopLeftRadius: "3px",
      WebkitBorderBottomLeftRadius: "3px",
      MozBorderBottomLeftRadius: "3px",
      MsBorderBottomLeftRadius: "3px",
      OBorderBottomLeftRadius: "3px",
      borderBottomLeftRadius: "3px",
    },
    nowPlayingContainerInnerHover: {
      boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
    },
    trackArt: {
      maxWidth: "30%",
      float: "left",
      left: "0",
      WebkitBorderTopLeftRadius: "3px",
      MozBorderTopLeftRadius: "3px",
      MsBorderTopLeftRadius: "3px",
      OBorderTopLeftRadius: "3px",
      borderTopLeftRadius: "3px",
      WebkitBorderBottomLeftRadius: "3px",
      MozBorderBottomLeftRadius: "3px",
      MsBorderBottomLeftRadius: "3px",
      OBorderBottomLeftRadius: "3px",
      borderBottomLeftRadius: "3px",
    },
    trackInfo: {
      width: "70%",
      float: "left",
      display: "block",
    },
    trackInfoLink: {
      maxWidth: "90%",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      textDecoration: "none",
      verticalAlign: "middle",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    trackInfoLinkOdd: {
      color: "black",
      fontWeight: "bold",
      verticalAlign: "middle",
      lineHeight: "15px",
      letterSpacing: "0.2px",
      padding: "10% 0 0 5%",
    },
    trackInfoLinkOddImg: {
      width: "15px",
      height: "15px",
      verticalAlign: "middle",
      margin: "-2% 3px 0 0",
    },
    trackInfoLinkEven: {
      color: "gray",
      fontSize: "12px",
      letterSpacing: "0.1px",
      padding: "5% 0 0 5%",
    },
    trackInfoLinkEvenImg: {
      width: "15px",
      height: "15px",
      verticalAlign: "middle",
      margin: "-2% 3px 0 0",
    },
  };

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
          setShowCursor(true);
        }
      }, 50);

      const cursorInterval = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, 500);

      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
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
    <VStack spacing={6} mt={[4, 10]} px="10px">
      <Box mt={["90px", "0px"]} maxW="63rem" p={[6, 8, "0px"]}>
        <Box fontSize={["30px", "35px", "40px"]} fontWeight="bold" color="blue.600">
          <TypingAnimation />
        </Box>
        <Introduction />
      </Box>

      <div style={spotifyPlayerStyles.nowPlayingCard}>
        <SpotifyPlayer
          client_id={import.meta.env.VITE_CLIENT_ID}
          client_secret={import.meta.env.VITE_CLIENT_SECRET}
          refresh_token={import.meta.env.VITE_REFRESH_TOKEN}
        />
      </div>

      <Box w="100%" mx="auto" px="auto">
        <TestTimeline />
      </Box>

      <Box mt="1rem" maxW="100%">
        <TestProjects />
      </Box>
    </VStack>
  );
}
