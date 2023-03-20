import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import ButtonConfigFooter from './ButtonConfigFooter'

export default function ConfigFooter() {
  return (
    <Box w={'100%'} bg={'#131a22'} >
        <Flex justifyContent={'space-between'} maxW={'1000px'} m={'0 auto'} py={8} px={'150px'}>
          <Image objectFit={'contain'} w={'76px'} src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695' alt='Logo Amazon' />
          <Box>
            <ButtonConfigFooter>
              Español
            </ButtonConfigFooter>
            <ButtonConfigFooter>
              $ USD - dólar estadounidense
            </ButtonConfigFooter>
            <ButtonConfigFooter>
              Estados Unidos
            </ButtonConfigFooter>
          </Box>
        </Flex>
    </Box>
  )
}
