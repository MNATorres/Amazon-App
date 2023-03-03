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
import { BsCaretDownFill } from "react-icons/bs";





export default function Navigation() {

    return (
        <Box>
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
            >

                <Flex>
                    <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="Logo" style={{ width: "100px" }} />
                </Flex>

                <Flex >
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
                <Flex w={"60%"} color={"#111"}>
                    <MenuInput />
                    <InputHeader />
                    <ButtonInputSearch />
                </Flex>
                <Flex color={"#111"} mx={'1px'}>
                    <ButtonInput>
                        <img style={{ width: "25px", margin:'3px' }} src="https://static.vecteezy.com/system/resources/previews/010/870/761/original/american-flag-of-united-states-of-america-png.png" alt="eeuu" />
                        <Text fontWeight={'bold'} fontSize={'16px'}>
                            ES
                        </Text>
                        <BsCaretDownFill style={{fontSize:'10px', color: "#CCCCCC", marginTop:'5px'}}/>
                    </ButtonInput>
                    <ButtonInput>
                        <Box >
                            <Text fontSize={'12px'}>
                                Hola, identificate
                            </Text>
                            <Text>
                                Cuenta y Listas
                            </Text>
                        </Box>
                    </ButtonInput>
                    <ButtonInput>
                        <Box >
                            <Text fontSize={'12px'}>Devoluciones</Text>
                            <Text>y Pedidos</Text>
                        </Box>
                    </ButtonInput>
                    <ButtonInput>
                        
                        <BsCart4 style={{fontSize: '20px', margin:'3px'}} />
                        Carrito
                        
                    </ButtonInput>
                </Flex>

            </Flex>


        </Box>
    );
}






