import { SimpleGrid, Box, useColorMode, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Introduction = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return ( 
        <Box mt="10px" fontWeight="normal" fontSize="18px" pt="10px">
            <Text mb={5}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde delectus hic accusantium earum expedita fugiat. Accusantium rem atque saepe nulla ab ad impedit architecto voluptatem reiciendis. Error molestiae officiis quo!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </Text>

            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde delectus hic accusantium earum expedita fugiat. Accusantium rem atque saepe nulla ab ad impedit architecto voluptatem reiciendis. Error molestiae officiis quo!
            </Text>

            <Box mt={70} fontWeight="bold">
            <a href="/About">learn more about me</a>
            </Box>
        </Box>
    );
}
 
export default Introduction;