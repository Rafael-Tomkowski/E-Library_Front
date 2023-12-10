import {
  Box,
  Flex,
  Button,
  Stack,
  Center,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  IconButton
} from '@chakra-ui/react';
import { AddIcon, TriangleDownIcon } from '@chakra-ui/icons';
import dayjs from 'dayjs';

export default function ReservedBooks(){
  const mockreservas = [{
      "reservaId": 1,
      "livroId": 19,
      "usuarioId": 2,
      "dataReserva": "2023-12-05T19:54:01.99",
      "livro": {
        "livroId": 19,
        "titulo": "1",
        "autor": "1",
        "descricao": "1"
      }
  }]
  return(
    <>
    <Box p={4}>      
      <Flex
        align="center"
        justify="center"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={1000}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >

          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Titulo</Th>
                  <Th>Autor</Th>
                  <Th>Descrição</Th>
                  <Th>Dt. Inicial Agendamento</Th>
                  <Th>Dt. Final Agendamento</Th>
                  <Th>Retirar</Th>
                </Tr>
              </Thead>
              
              <Tbody>
                {mockreservas.map((b)=> <Tr key={b.livroId}>
                  <Td>{b.livro.livroId}</Td>
                  <Td>{b.livro.titulo}</Td>
                  <Td>{b.livro.autor}</Td>
                  <Td>{b.livro.descricao}</Td>
                  <Td>{dayjs(b.dataReserva).format('DD/MM/YYYY HH:mm')}</Td>
                  <Td>{dayjs(b.dataReserva).add(5, 'day').format('DD/MM/YYYY HH:mm')}</Td>
                  <Td><IconButton icon={<TriangleDownIcon />} colorScheme="green"/></Td>
                </Tr>)}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Flex>
          <Stack>
              <Button as="a" href={'registerbook'} leftIcon={<AddIcon/>} colorScheme="teal">Adicionar livro</Button>
          </Stack>
      </Box>
    </>
  )
}