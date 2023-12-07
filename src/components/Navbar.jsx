import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer,Box,Menu,MenuButton,MenuList,MenuItem } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <div>

<Flex>
  <Box p='4'>
  Tienda Smile
  </Box>
  <Spacer />

  <Menu>
  <MenuButton>
    Categorias
  </MenuButton>
  <MenuList>
    <MenuItem>Remeras</MenuItem>
    <MenuItem>Hoodies</MenuItem>
    <MenuItem>Pants</MenuItem>
    <MenuItem>Accesorios</MenuItem>
    <MenuItem>Calzados</MenuItem>
  </MenuList>
</Menu>

  <Spacer />
  <Box p='4'>
  <CartWidget/>
  </Box>
</Flex>


    </div>
  )
}

export default Navbar