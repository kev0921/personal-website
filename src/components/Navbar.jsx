import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Avatar,
  IconButton,
  useColorMode,
  Link,
  Spacer
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMenu } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import UserIcon from '/img/luigi.png';

const MenuItems = ({ colorMode, children }) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    color={`mode.${colorMode}.color`}
    _hover={{ textDecoration: 'underline' }}
  >
    {children}
  </Text>
);

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const Header = props => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        maxW="100%"
        h="0px"
        bg="white"
        boxShadow="lg"
        spacing={4}
      />
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        py="0.75rem"
        color="#2D3748"
        {...props}
      >
        <Flex
          align="center"
          mr={{ md: '5' }}
          width={{ sm: '100%', md: 'auto' }}
          justifyContent={{ sm: 'space-between', md: 'flex-start' }}
        >
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            <Avatar
              name="Kevin Hu"
              size="lg"
              src={UserIcon}
            />
          </Heading>

          <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
            <FiMenu
              fontSize="2.5rem"
              color={colorMode === 'light' ? '#000' : '#fff'}
            />
          </Box>
        </Flex>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: '100%', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <Link
            as={NavLink}
            exact
            to="/"
            activeStyle={{
              background: colorMode === 'light' ? '#000' : '#252424e0',
              color: '#fff',
            }}
            borderRadius={{ sm: '5px' }}
            mr={{ sm: '0', md: '3' }}
            mt={{ sm: '2', md: '0' }}
            color={`mode.${colorMode}.color`}
            padding="0.7rem"
            display={{ sm: 'block' }}
            _visited={{ outline: 'none' }}
            _hover={{
              background:
                colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
              color: '#fff'
            }}
            onClick={() => setShow(false)}
            zIndex={30}
          >
            Portfolio
          </Link>
          <Link
            as={NavLink}
            exact
            to="About"
            activeStyle={{
              background: colorMode === 'light' ? '#000' : '#252424e0',
              color: '#fff'
            }}
            borderRadius={{ sm: '5px' }}
            mr={{ sm: '0', md: '3' }}
            mt={{ sm: '2', md: '0' }}
            padding="0.7rem"
            display={{ sm: 'block' }}
            color={`mode.${colorMode}.color`}
            _hover={{
              background:
                colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
              color: '#fff'
            }}
            onClick={() => setShow(false)}
          >
            About Me
          </Link>
          <Link
            as={NavLink}
            exact
            to="Contact"
            activeStyle={{
              background: colorMode === 'light' ? '#000' : '#252424e0',
              color: '#fff'
            }}
            borderRadius={{ sm: '5px' }}
            mr={{ sm: '0', md: '3' }}
            mt={{ sm: '2', md: '0' }}
            color={`mode.${colorMode}.color`}
            padding="0.7rem"
            display={{ sm: 'block' }}
            _visited={{ outline: 'none' }}
            _hover={{
              background:
                colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
              color: '#fff'
            }}
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
        </Box>

        <Spacer />

        <Box>
          <IconButton
            aria-label="Color Mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
            onClick={toggleColorMode}
            size="lg"
            isRound={true}
            {...iconProps}
            ml="20rem"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Header;
