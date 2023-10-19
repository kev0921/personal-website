import { Box, Flex, Text, useColorMode, UnorderedList, ListItem, useBreakpointValue } from "@chakra-ui/react";

const TimelineItem = ({ title, description, date, location }) => {
  const { colorMode } = useColorMode();

  const itemStyles = {
    borderBottom: "1px solid",
    borderBottomColor: colorMode === "dark" ? "white" : "black",
    pb: [5, 10],
    mb: [5, 10],
    justifyContent: "space-between",
  };

  const titleStyles = {
    color: colorMode === "dark" ? "white" : "black",
    fontWeight: "bold",
    mb: [2, 3],
    fontSize: [25, 30]
  };

  const descriptionStyles = {
    color: colorMode === "dark" ? "gray.400" : "gray.600",
    fontWeight: "normal",
    fontSize: [15, 20],
  };

  const dateStyles = {
    mt:[2, 12],
    color: colorMode === "dark" ? "gray.400" : "gray.600",
    fontWeight: "normal",
    fontSize: [15, 15],
    whiteSpace: ["wrap","nowrap"],
    textAlign: ["right", "right"]
  };

  const locationStyles = {
    mt: [3, 0],
    color: colorMode === "dark" ? "gray.400" : "gray.600",
    fontWeight: "normal",
    fontSize: [12, 12],
    textAlign: ["right", "right"],
    whiteSpace: ["wrap","nowrap"]
  };

  return (
    <Flex sx={itemStyles}>
      <Flex direction="column">
        <Text sx={titleStyles}>{title}</Text>
        <UnorderedList sx={descriptionStyles}>{description}</UnorderedList>
      </Flex>
      <Box>
        <Text ml={[4, 10]} sx={dateStyles}>{date}</Text>
        <Text ml={[4, 10]} sx={locationStyles}>{location}</Text>
      </Box>
    </Flex>
  );
};


const VerticalTimeline = () => {

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" minW="100%">
      
      <TimelineItem
        title="Web Developer - RCHRA"
        date={isSmallScreen ? "2022" : "Nov 2022 - Apr 2022"}
        location="Toronto, Canada"
        description={
        <Box minW="100%">
          <ListItem>Responsible for creating and maintaining the club’s website using HTML, CSS, JavaScript, Bootstrap, and React.</ListItem>
          <ListItem>Led the web development team to introduce new components to the website.</ListItem>
        </Box>
      } 
      />
      <TimelineItem
        title="General Executive - RHHS Robotics"
        date={isSmallScreen ? "2021-2022" : "Oct 2021 - Apr 2022"}
        location="Richmond Hill, Canada"
        description={
          <Box minW="100%">
            <ListItem>Demonstrated robot building procedures and answered questions about Vex robot parts.</ListItem>
            <ListItem>Organized meetings and assembled power points to teach lesson material relevant to ongoing projects.</ListItem>
            <ListItem>Planned budgeting with the club presidents and other executives.</ListItem>
          </Box>
        } 
      />
      <TimelineItem
        title="Volunteer - Trillium Woods"
        date={isSmallScreen ? "2018-2019" : "Sept 2018 - Feb 2019"}
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
