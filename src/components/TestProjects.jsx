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
  AspectRatio
} from '@chakra-ui/react';
import peterpitch_img from '/img/luigi.png';
import workof_img from '/img/luigi.png';
import notch_img from '/img/luigi.png';
import souq_img from '/img/luigi.png';
import gosave_img from '/img/luigi.png';

function Project({ title, desc, tech, colorMode, image_url }) {
  return (
    <Stack marginBottom={5}>
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
        _hover={{ shadow: 'md' }}
        borderWidth="1px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={`mode.${colorMode}.cardBG`}
        position="relative"
        rounded="md"
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
      title: '',
      desc: ``,
      tech: '',
      image_url: peterpitch_img
    },
    {
      title: '',
      desc: ``,
      tech: '',
      image_url: notch_img
    },
    {
      title: '',
      desc: ``,
      tech: '',
      image_url: workof_img
    },
    {
      title: '',
      desc: ``,
      tech: '',
      image_url: souq_img
    },
    {
      title: '',
      desc: ``,
      tech: '',
      image_url: gosave_img
    }
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
            colorMode={colorMode}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;