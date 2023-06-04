import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem, useColorMode} from "@chakra-ui/react"

export default function RootLayout() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid templateColumns="repeat(3, 1fr)" bg={colorMode === "dark" ? "black" : "#F2F6F6"} transition="color, background-color 0.3s ease!important" >
      <GridItem colSpan="3">
        <Navbar bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.5)"}/>
      </GridItem>
      <GridItem colSpan="3">
        <Outlet/>
      </GridItem>
    </Grid>
  )
}
