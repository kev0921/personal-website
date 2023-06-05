import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";

const Timeline = () => {
    const { colorMode } = useColorMode();
  
    const timelineItemStyles = {
      position: "relative",
      paddingLeft: "30px",
      marginBottom: "100px",
      marginLeft: "350px",
      _before: {
        content: '""',
        position: "absolute",
        top: "0.8rem",
        left: "0.3rem",
        width: "0.5rem",
        height: "0.5rem",
        borderRadius: "50%",
        backgroundColor: colorMode === "dark" ? "white" : "gray.500",
      },
    };
  
    return (
      <Flex direction="column">
        <Box sx={timelineItemStyles}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Event 1
          </Text>
          <Text>Event description</Text>
        </Box>
  
        <Box sx={timelineItemStyles}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Event 2
          </Text>
          <Text>Event description</Text>
        </Box>
  
        {/* Add more timeline items */}
      </Flex>
    );
};

export default Timeline;
