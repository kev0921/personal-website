import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { Grid, GridItem, useColorMode} from "@chakra-ui/react"

export default function RootLayout() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid templateColumns="repeat(3, 1fr)" bg={colorMode === "dark" ? "black" : "#F2F6F6"} transition="color, background-color 1s ease!important" >
      <GridItem colSpan="3" display="flex" justifyContent="center" boxShadow="md">
        <Navbar/>
      </GridItem>

      <GridItem colSpan="3">
        <Outlet/>
      </GridItem>
      
      <GridItem colSpan="3">
        <Footer/>
      </GridItem>

    </Grid>
  )
}
