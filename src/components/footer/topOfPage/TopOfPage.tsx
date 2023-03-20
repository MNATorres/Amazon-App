import { Text } from '@chakra-ui/react'
import React from 'react'

export default function TopOfPage() {
  return (
    <Text color={'#FFF'} bg={'#37475a'} textAlign={'center'} py={3} fontSize={13} _hover={{backgroundColor: '#485769', cursor: 'pointer'}} w={'100%'}>
        Inicio de Página
    </Text>
  )
}
