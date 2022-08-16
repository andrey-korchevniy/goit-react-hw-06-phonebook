import { Outlet } from "react-router-dom";
import { Container, Main } from "./Layout.styled";
import { NavMenu } from "./NavMenu/NavMenu";
import { FilterBar } from "./FilterBar/FilterBar";

export const Layout = () => {
  return (
    <Container>
      <NavMenu />
      <FilterBar />
      <Main>
        <Outlet />
      </Main>
    </Container>  
  )
}