import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Center,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Td,
  Th
} from '@chakra-ui/react';

import { AddIcon, DeleteIcon, EditIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../service/api';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

export default function BookShelf() {
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  useEffect(()=> {
    console.log(books)
    async function getBooks(){
      const records = await api.get(`/Livro`);
      setBooks(records.data)
    }
    getBooks()
  }, [])
  
  async function deleteBook(id){
    await api.delete(`/Livro/${id}`); 
    setBooks(books.filter(book =>book.livroId!==id));
  }

  const borrowBook = useCallback(async (id) => {
    await api.put(`/Livro/Emprestimo/${id}`);
    window.location.reload();
  }, [])



  return (
    <>
      <HeaderComponent />

      <Box p={4}>      
      <Flex
        align="center"
        justify="center"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={1100}
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
                  <Th>Deletar</Th>
                  <Th>Editar</Th>
                  {/* <Th>Reservar</Th> */}
                  <Th>Retirar</Th>
                  {/* <Th>Devolver</Th> */}
                </Tr>
              </Thead>
              
              <Tbody>
                {books.map((b)=> <Tr key={b.livroId}>
                  <Td>{b.livroId}</Td>
                  <Td>{b.titulo}</Td>
                  <Td>{b.autor}</Td>
                  <Td>{b.descricao}</Td>
                  <Td><IconButton onClick={() => deleteBook(b.livroId)} icon={<DeleteIcon  />}  colorScheme="red"/></Td>
                  <Td><IconButton onClick={() => navigate(`/EditBook/${b.livroId}`)} icon={<EditIcon />} colorScheme="orange"/></Td>
                  {/* <Td><IconButton icon={<TimeIcon  />}  colorScheme="yellow"/></Td> */}
                  <Td><IconButton onClick={() => borrowBook(b.livroId)}icon={<TriangleDownIcon />} colorScheme="green"/></Td>
                  {/* <Td><IconButton icon={<TriangleUpIcon />} colorScheme="blue"/></Td> */}
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
  );
}
