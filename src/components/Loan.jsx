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
import { AddIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useState, useEffect, useCallback } from 'react';
import { api } from '../service/api';


export default function BorowedBooks(){
  const [books, setBooks] = useState([])

  useEffect(()=> {
    console.log("TESTEEEE")
    async function getBooks(){
      const records = await api.get(`/Livro/Emprestimos`);
      console.log(records);
      setBooks(records.data)
    }
    getBooks()
  }, [])

  const borrowBook = useCallback(async (id) => {
    await api.put(`/Livro/Emprestimo/${id}`);
    window.location.reload();
  }, [])
  
  
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
          maxW={840}
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
                  <Th>ID</Th>
                  <Th>Titulo</Th>
                  <Th>Autor</Th>
                  <Th>Descrição</Th>
                  <Th>Devolver</Th>
                </Tr>
              </Thead>
              
              <Tbody>
                {books.map((b)=> <Tr key={b.livroId}>
                  <Td>{b.livroId}</Td>
                  <Td>{b.titulo}</Td>
                  <Td>{b.autor}</Td>
                  <Td>{b.descricao}</Td>
                  {/* <Td><IconButton icon={<TimeIcon  />}  colorScheme="yellow"/></Td> */}
                  {/* <Td><IconButton onClick={() => borrowBook(b.livroId)}icon={<TriangleDownIcon />} colorScheme="green"/></Td> */}
                  <Td><IconButton onClick={() => borrowBook(b.livroId)} icon={<TriangleUpIcon />} colorScheme="blue"/></Td>
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