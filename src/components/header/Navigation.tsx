import {
    Box,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import { TbMapPin } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import MenuInput from './MenuInput';
import InputHeader from './InputHeader';
import ButtonInputSearch from './ButtonInputSearch';
import ButtonInput from './ButtonInput';
import UserAccount from './UserAccount';



export default function Navigation() {

    return (
        <Box >
            <Flex
                bg={'#131921'}
                color={'white'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justifyContent={'space-between'}
                flexDir={{ base: 'column', md: 'row' }}
                minWidth={'300px'}
            >

                <Flex w={{ base: '100%', md: 'unset', lg: 'unset', xl: 'unset' }} justifyContent={'space-between'} alignItems={'center'}>
                    <Box w={{base: "21%", md: 'unset', lg: 'unset', xl: 'unset'}}>
                        <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="Logo" style={{ width: "100px",minWidth: "80px" ,maxHeight: "30.13px" }} />
                    </Box>

                    <Box display={{ base: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                        <UserAccount />
                    </Box>
                </Flex>

                <Flex display={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }} >
                    <ButtonInput>
                        <Box m={'10px 0 0 0'}>
                            <TbMapPin style={{ color: "white", fontSize: '20px' }} />
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#CCCCCC'} fontSize={"12px"}>Enviar a</Text>
                            <Text >Argentina</Text>
                        </Box>
                    </ButtonInput>
                </Flex>

                <Flex mx={'5px'} w={{ base: '100%', md: '60%', lg: '60%', xl: '60%' }} color={"#111"}>
                    <MenuInput />
                    <InputHeader />
                    <ButtonInputSearch />
                </Flex>

                <Flex display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} color={"#111"} mx={'1px'}>
                    <UserAccount />
                </Flex>

            </Flex>


        </Box>
    );
}






