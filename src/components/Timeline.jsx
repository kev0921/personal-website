import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";

const TimelineItem = ({ title, description, date, location }) => {
  const { colorMode } = useColorMode();

  const itemStyles = {
    borderBottom: "1px solid",
    borderBottomColor: colorMode === "dark" ? "white" : "black",
    pb: "20px",
    mb: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const titleStyles = {
    color: colorMode === "dark" ? "white" : "black",
    fontWeight: "bold",
    mb: "5px",
    fontSize: "30px"
  };

  const descriptionStyles = {
    color: colorMode === "dark" ? "white" : "gray.600",
    fontWeight: "normal",
    fontSize: "20px",
  };

  const dateStyles = {
    mt:"12px",
    color: colorMode === "dark" ? "white" : "gray.600",
    fontWeight: "normal",
    fontSize: "15px",
    whiteSpace:"nowrap"
  };

  const locationStyles = {
    color: colorMode === "dark" ? "white" : "gray.600",
    fontWeight: "normal",
    fontSize: "12px",
    textAlign: "right"
  };

  return (
    <Box sx={itemStyles}>
      <Flex direction="column">
        <Text sx={titleStyles}>{title}</Text>
        <Text sx={descriptionStyles}>{description}</Text>
      </Flex>
      <Box>
        <Text sx={dateStyles}>{date}</Text>
        <Text sx={locationStyles}>{location}</Text>
      </Box>
    </Box>
  );
};

const VerticalTimeline = () => {
  return (
    <Flex direction="column">
      <TimelineItem
        title="Web Developer"
        date="Jan 1, 2022 - Jan 1, 2022"
        location="Toronto, Canada"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <TimelineItem
        title="General Executive"
        date="February 1, 2022"
        location="New York, USA"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <TimelineItem
        title="Volunteer"
        date="March 1, 2022"
        location="London, UK"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </Flex>
  );
};

export default VerticalTimeline;
