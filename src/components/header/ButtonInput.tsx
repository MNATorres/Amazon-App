import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

export default function ButtonInput({children} : {children: React.ReactNode}) {
    return (
        <Button bg={'none'} colorScheme='teal' size='lg'>
            {children}
        </Button>
    )
}
