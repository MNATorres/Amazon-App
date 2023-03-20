import { Button } from '@chakra-ui/react'
import React, { Children } from 'react'

export default function ButtonConfigFooter({children}: {children: React.ReactNode}) {
  return (
    <Button h={'34px'} mx={2} bg={'unset'} border={'1px solid #FFF'} _hover={{background:'unset'}}>
        {children}
    </Button>
  )
}
