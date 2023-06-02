import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" bg="gray.50">
      <GridItem colSpan="3">
        <Navbar />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
