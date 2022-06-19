import React from 'react'
import tw from "twin.macro";

type Props = {}

const Navbar = (props: Props) => {
  const Nav = tw.nav`bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded m-10`;
  const Container = tw.div`container flex flex-wrap justify-between items-center mx-auto`;
  const Brand = tw.span`self-center text-xl font-semibold whitespace-nowrap`;
  const MenuContainer = tw.div`w-full md:block md:w-auto`;
  const MenuListContainer = tw.ul`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium`;
  const MenuItemContainer = tw.li``;
  const MenuItamTag = tw.a`block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 text-black`;

  return (
    <Nav>
      
      <Container>
        <Brand>
          UPayments Store
        </Brand>

        <MenuContainer>
          <MenuListContainer>
            <MenuItemContainer>
              <MenuItamTag href="">
                Register
              </MenuItamTag>
            </MenuItemContainer>
          </MenuListContainer>
        </MenuContainer>
      </Container>

    </Nav>

  )
}

export default Navbar