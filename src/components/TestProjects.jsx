import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  Grid,
  Skeleton,
  AspectRatio,
  Icon,
} from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import peterpitch_img from '/img/luigi.png';
import workof_img from '/img/luigi.png';
import melody_match from '/img/MelodyMatch.png';
import club_website from '/img/ClubWebsite.png';
import maze_solver_robot from '/img/MazeSolverRobot.png';
import MyRecipeMate from '/img/MyRecipeMate.png';

function Project({ title, desc, tech, colorMode, image_url, github_url, project_url }) {
  return (
    <Stack as="a" marginBottom={5} href={project_url}>
      <Heading as="h4" size="md" color={`mode.${colorMode}.career.text`}>
        <Flex alignItems="center">
          <Text as="span" color={`mode.${colorMode}.career.text`}>
            {title}
          </Text>
        </Flex>
      </Heading>
      <Grid
        // templateColumns="repeat(2, 1fr)"
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={2}
        p={5}
        _hover={{
          transform: 'translateY(-8px)',
          position: 'relative',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderColor: 'blue.300'
        }}
        borderWidth="1px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={`mode.${colorMode}.cardBG`}
        position="relative"
        rounded="md"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
      >
        <Flex w="100%" h="100%" alignItems="center">
          <AspectRatio ratio={1.85 / 1} w="100%" borderBottomWidth="1px">
            <Image
              rounded="md"
              src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
              fallback={<Skeleton />}
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <Box w="100%">
          <Stack mt={2} pl={[0, 4, 4, 4]}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              lineHeight="short"
              color={`mode.${colorMode}.subtext`}
            >
              {desc}
            </Text>
            <Stack isInline>
              {tech.split(',').map(tag => (
                <Tag
                  size="sm"
                  padding="0 3px"
                  key={tag}
                  fontWeight="bold"
                  color={`mode.${colorMode}.career.subtext`}
                  bgColor={`mode.${colorMode}.career.tagBG`}
                >
                  {tag}
                </Tag>
              ))}
            </Stack>
            <a href={github_url}>
                <Icon as={DiGithubBadge} boxSize={12} color='blue.500' transition="color 0.3s ease" _hover={{ color: colorMode === "dark" ? "white" : "black" }}></Icon>
            </a>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

const Projects = () => {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'MyRecipeMate',
      desc: `MyRecipeMate is a recipe saving application. Users can create their own accounts to save and organize the recipes that they like from a large database of popular recipes`,
      tech: 'Java, Swing',
      image_url: MyRecipeMate,
      github_url: "https://github.com/pratzyushd/csc207-course-project",
      project_url: "https://github.com/pratzyushd/csc207-course-project",
    },
    {
      title: 'HomeworkPal',
      desc: `HomeworkPal is a homework task tracker web application that allows users to create their own tasks and track the completion of those tasks. Users can create their own accounts so they can save their tasks and complete them later.`,
      tech: 'TypeScript, MongoDB, Express, React, Node.js, ChakraUI',
      image_url: peterpitch_img,
      github_url: "https://github.com/kev0921/Homework-Pal",
      project_url: "https://github.com/kev0921/Homework-Pal",
    },
    {
      title: 'MelodyMatch',
      desc: `MelodyMatch is a spotify song recommendation app. Connect your spotify account to our app and, with a click of a button, generate a list of songs from our database that are taylored to your song preferences!`,
      tech: 'Python, Spotipy, Tkinter, Bottle',
      image_url: melody_match,
      github_url: "https://github.com/Manal-jpg/csc111-group-project",
      project_url: "https://github.com/Manal-jpg/csc111-group-project",
    },
    {
      title: 'Club Website',
      desc: `This is the website I created with a team of web developers for the RCHRA club at UofT. This website provides information on upcoming club events, infromation about the club, and more.`,
      tech: 'Javascript, Bootstrap, CSS, HTML, React',
      image_url: club_website,
      github_url: "https://github.com/jaeyonglee3/RCHRA-Website",
      project_url: "https://www.rchumanresourcesassociation.ca/",
    },
    {
      title: 'Maze Solver Robot',
      desc: `Using Arduino robot parts and the Arduino IDE, I created a robot that is able to solve simple mazes using data gathered by its ultrasonic sensor.`,
      tech: 'C++, Arduino',
      image_url: maze_solver_robot,
      github_url: null,
      project_url: null,
    },
  ];
  return (
    <Stack
        mx="auto"
        px="auto"
        paddingTop="3rem"
        maxW="63rem"
    >
      <Stack spacing={2}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
            github_url={project.github_url}
            project_url={project.project_url}
            colorMode={colorMode}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;