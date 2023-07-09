import { Box, Flex, Text, useColorMode, UnorderedList, ListItem } from "@chakra-ui/react";

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
    color: colorMode === "dark" ? "gray.400" : "gray.600",
    fontWeight: "normal",
    fontSize: "20px",
  };

  const dateStyles = {
    mt:"12px",
    color: colorMode === "dark" ? "gray.400" : "gray.600",
    fontWeight: "normal",
    fontSize: "15px",
    whiteSpace:"nowrap"
  };

  const locationStyles = {
    color: colorMode === "dark" ? "gray.400" : "gray.600",
    fontWeight: "normal",
    fontSize: "12px",
    textAlign: "right"
  };

  return (
    <Box sx={itemStyles}>
      <Flex direction="column">
        <Text sx={titleStyles}>{title}</Text>
        <UnorderedList sx={descriptionStyles}>{description}</UnorderedList>
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
        date="November 2022 - April 2022"
        location="Toronto, Canada"
        description={
        <Box>
          <ListItem>Responsible for creating and maintaining the club’s website using HTML, CSS, JavaScript, Bootstrap, and React.</ListItem>
          <ListItem>Led the web development team to introduce new components to the website.</ListItem>
        </Box>
      } 
      />
      <TimelineItem
        title="General Executive"
        date="October 2021 - April 2022"
        location="Richmond Hill, Canada"
        description={
          <Box>
            <ListItem>Demonstrated robot building procedures and answered questions about Vex robot parts.</ListItem>
            <ListItem>Organized meetings and assembled power points to teach lesson material relevant to ongoing projects.</ListItem>
            <ListItem>Planned budgeting with the club presidents and other executives.</ListItem>
          </Box>
        } 
      />
      <TimelineItem
        title="Volunteer"
        date="September 2018 - February 2019"
        location="Richmond Hill, Canada"
        description={
          <Box>
            <ListItem>Responsible for teaching drills, plays, and participating in interactive activities for my house league team.</ListItem>
            <ListItem>Analyzed my players’ skills and work ethic to provide constructive criticism and helpful feedback.</ListItem>
            <ListItem>Played the team coach or referee role during game time.</ListItem>
          </Box>
        } 
      />
    </Flex>
  );
};

export default VerticalTimeline;
