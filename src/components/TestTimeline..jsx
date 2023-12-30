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
  Avatar
} from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import PhaedraLogo from '/img/luigi.png';
import BrainxLogo from '/img/luigi.png';
import CodenyaLogo from '/img/luigi.png';
import BrainplowLogo from '/img/luigi.png';
import UniLogo from '/img/luigi.png';

function Company({
  title,
  role,
  skills,
  period,
  logo,
  colorMode,
  alt,
  isEducation = false
}) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{
        transform: 'translateY(-3px)',
        position: 'relative',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderColor: 'blue.300'
      }}
      borderWidth="1px"
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            width={{
              sm: '4rem',
              md: '14'
            }}
            height={{
              sm: isEducation ? '4rem' : 'auto',
              md: 'auto'
            }}
            objectFit="cover"
            src={logo}
            alt={alt}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {title}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {role}
              <Text
                display={['block', 'none', 'none', 'none']}
                fontSize={14}
                color={`mode.${colorMode}.career.subtext`}
              >
                {period}
              </Text>
            </Heading>
          </Stack>
        </Flex>
        <Stack display={['none', 'flex', 'flex', 'flex']}>
          <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
            {period}
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={2} mt={3} isInline alignItems="center">
        {skills.split(',').map(skill => (
          <Tag
            size="sm"
            padding="0 3px"
            key={skill}
            fontWeight="bold"
            color={`mode.${colorMode}.career.subtext`}
            bgColor={`mode.${colorMode}.career.tagBG`}
          >
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}

const TestTimeline = () => {
  const { colorMode } = useColorMode();
  const companies = [
    {
      title: 'Orchard Family Dentistry',
      alt: 'Image',
      role: 'Web Developer',
      skills: 'React, Tailwind CSS, JavaScript',
      period: 'July 2023 - Present',
      logo: PhaedraLogo
    },
    {
      title: 'RCHRA',
      alt: 'Image',
      role: 'Web Developer',
      skills: 'HTML, CSS, JavaScript, Bootstrap, React',
      period: 'Nov 2022 - Apr 2023',
      logo: PhaedraLogo
    },
    {
      title: 'RHHS Robotics',
      alt: 'Image',
      role: 'General Executive',
      skills: 'Arduino, C++',
      period: 'Oct 2021 - Apr 2022',
      logo: BrainxLogo
    },
    {
      title: 'Trillium Woods',
      alt: 'Image',
      role: 'Volunteer',
      skills: 'Communication, Leadership, Team Work, Organization',
      period: 'Sept 2018 - Feb 2019',
      logo: BrainxLogo
    },
  ];
  return (
    <Stack
      mx="auto"
      px="auto"
      paddingTop="3rem"
      maxW="63rem"
    >
      <Stack spacing={5} marginBottom={6}>
        <Heading color="blue.600">
          <Flex alignItems="center">
            <Text as="span" color="blue.600">
              Experience
            </Text>
            <Stack pl={3}>
              <Box
                as={BsFillBriefcaseFill}
                size="25px"
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        {companies.map((company, index) => (
          <Company
            key={index}
            title={company.title}
            role={company.role}
            skills={company.skills}
            period={company.period}
            logo={company.logo}
            colorMode={colorMode}
          />
        ))}
      </Stack>
      <Stack spacing={4}>
        <Heading>
          <Flex alignItems="center">
            <Text as="span" color="blue.600">
              Education
            </Text>
            <Stack pl={2}>
              <Box
                as={FaGraduationCap}
                color="blue.600"
              />
            </Stack>
          </Flex>
        </Heading>
        <Company
          title="University of Toronto - St.George Campus"
          alt="Image"
          role="Bachelor's Degree in Computer Science"
          skills="Data Stuctures and Algorithms, Software Design, Object Oriented Programming"
          period="2022 - Present"
          logo={UniLogo}
          colorMode={colorMode}
          isEducation={true}
        />
      </Stack>
    </Stack>
  );
};

export default TestTimeline;