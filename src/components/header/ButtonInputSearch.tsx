import { Button } from '@chakra-ui/react'
import { GoSearch } from "react-icons/go";


export default function ButtonInputSearch() {
    return (
        <Button  bg={'#fbbb6b'} colorScheme='blue'> <GoSearch style={{color:"#111", fontSize:'24px'}} /> </Button>
    )
}
