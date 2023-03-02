import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import { TbMapPin } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import MenuInput from './MenuInput';
import InputHeader from './InputHeader';
import ButtonInputSearch from './ButtonInputSearch';
import ButtonInput from './ButtonInput';



export default function Navigation() {

    return (
        <Box>
            <Flex
                bg={'black'}
                color={'white'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="Logo" style={{ width: "100px" }} />
                </Flex>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Box>
                        <TbMapPin style={{ color: "white" }} />
                    </Box>
                    <Box>
                        <Text>Enviar a</Text>
                        <Text>Argentina</Text>
                    </Box>
                </Flex>
                <Flex flex={{ base: 9 }} justify={{ base: 'center', md: 'start' }} color={"#111"}>
                    <MenuInput />
                    <InputHeader />
                    <ButtonInputSearch />
                </Flex>
                <Flex flex={{ base: 3 }} justify={{ base: 'center', md: 'start' }} color={"#111"} mx={'30px'}>
                    <ButtonInput>
                        <img style={{ width: "30px" }} src="https://static.vecteezy.com/system/resources/previews/010/870/761/original/american-flag-of-united-states-of-america-png.png" alt="eeuu" />
                    </ButtonInput>
                    <ButtonInput>
                        <Box fontSize={"14px"}>
                            <Text fontSize={'12px'}>
                                Hola, identificate
                            </Text>
                            <Text>
                                Cuenta y Listas
                            </Text>
                        </Box>
                    </ButtonInput>
                    <ButtonInput>
                        <Box fontSize={"14px"}>
                            <Text fontSize={'12px'}>Devoluciones</Text>
                            <Text>y Pedidos</Text>
                        </Box>
                    </ButtonInput>
                    <ButtonInput>
                        <BsCart4 />
                        Carrito
                    </ButtonInput>
                </Flex>

            </Flex>


        </Box>
    );
}






