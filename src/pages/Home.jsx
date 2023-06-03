import { SimpleGrid, Box, useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box fontSize="50px" pt="70px" bg={colorMode === "dark" ? "black" : "rgba(255, 255, 255, 0.5)"} transition="color, background-color 0.3s ease-out!important">Home 
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa assumenda obcaecati dignissimos doloribus debitis illo velit, totam cupiditate, voluptas quas voluptatum magni pariatur consectetur sint veniam earum quasi. Fuga, voluptate.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit culpa nostrum qui dignissimos nesciunt laborum dolorum quae eveniet architecto quas officiis vel velit quis, ipsa blanditiis quibusdam! Doloremque, perferendis.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ex aliquam voluptate minima nobis in, commodi a expedita sint veritatis. Minima totam porro non aliquid provident quasi tempora, fugiat ab?
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, natus inventore similique vero, temporibus amet in recusandae esse velit eos ipsa quasi accusamus labore laudantium obcaecati aliquid ea fuga vel!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero, quod qui, quam optio amet, vitae consequatur illum expedita quibusdam ut debitis laborum incidunt saepe dolorum laudantium maxime? Quibusdam, adipisci!
    </Box>
  )
}
