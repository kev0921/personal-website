import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Image,
  Text,
  Link,
  Spinner,
} from "@chakra-ui/react";
import styled from "styled-components";
import getNowPlayingItem from "./SpotifyApi";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";

const SpotifyPlayer = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      console.log("API Response:", results[0]); // Log the API response
      setResult(results[0]);
      setLoading(false);
    });
  }, []); // empty dependency array

  return (
    <Center>
      <Box width="xs">
        {loading ? (
          <Stack align="center" mb={8}>
            <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
          </Stack>
        ) : (
          <Stack width="full" mb={result ? 2 : 4} spacing={3}>
            <Stack spacing={2} direction="row" align="center">
              <SpotifyLogo />
              <Text fontWeight="semibold">
                {result ? 'Now playing' : "Currently offline"}
              </Text>
              {result && result.isPlaying && <PlayingAnimation />}
            </Stack>
            {result && (
              <Box p={2} borderRadius="lg" borderWidth={1}>
                <Stack direction="row" spacing={4} align="center">
                  <Image
                    alt={`${result.title} album art`}
                    src={result.albumImageUrl}
                    width={12}
                    height={12}
                    borderRadius="sm"
                  />
                  <Stack spacing={0} overflow="hidden">
                    <Link href={result.songUrl} target="_blank">
                      <Text
                        fontWeight="semibold"
                        width="full"
                        isTruncated
                        color="gray.500"
                      >
                        {result.title}
                      </Text>
                    </Link>
                    <Text color="gray.500" isTruncated>
                      {result.artist}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            )}
          </Stack>
        )}
      </Box>
    </Center>
  );
};

export default SpotifyPlayer;

const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
