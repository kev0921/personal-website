import { SimpleGrid, Box, useColorMode, Text, HStack, Icon } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Introduction = () => {
    return ( 
        <Box mt="10px" fontWeight="normal" fontSize="18px" pt="10px" lineHeight={1.8}>
            <Text mb={5}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde delectus hic accusantium earum expedita fugiat. Accusantium rem atque saepe nulla ab ad impedit architecto voluptatem reiciendis. Error molestiae officiis quo!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </Text>

            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde delectus hic accusantium earum expedita fugiat. Accusantium rem atque saepe nulla ab ad impedit architecto voluptatem reiciendis. Error molestiae officiis quo!
            </Text>

            <HStack alignItems="center" mt={70} fontWeight="bold" _hover={{ textDecoration: "underline"}} >
                <a href="/About">learn more about me</a>
                <Icon as={ArrowForwardIcon} />
            </HStack>
        </Box>
    );
}
 
export default Introduction;