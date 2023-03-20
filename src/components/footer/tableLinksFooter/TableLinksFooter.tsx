import { Box, Flex } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function TableLinksFooter() {
  return (
    <Box width={'100%'}>
      <TableContainer color={'black'} maxW={'1000px'} textAlign={'center'} >
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td >25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td >30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td >0.91444</Td>
            </Tr>
          </Tbody>

        </Table>
      </TableContainer>
    </Box>
  )
}

