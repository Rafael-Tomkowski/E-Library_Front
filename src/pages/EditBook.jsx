import {
Center,
FormControl,
Input,
FormLabel,
Textarea,
Box,
Flex,
Avatar,
HStack,
IconButton,
Button,
Menu,
MenuButton,
MenuList,
MenuItem,
MenuDivider,
useDisclosure,
useColorModeValue,
Stack,
} from '@chakra-ui/react';
import HeaderComponent from '../components/HeaderComponent';

import useForm from '../hooks/useForm';
import { api } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function EditBook() {
const navigate = useNavigate();
let {id} = useParams()
const [book, setBook] = useState([])
const [{values, setValues}, handleChange, handleSubmit] = useForm()

// a parada é buscar pelo useEffect, e não pelo useForm
// o useEffect sempre deve estar no começo, maaasss abaixo dos dados necessários de navegação ou states
useEffect(()=> {
async function getBookById(){
const records = await api.get(`/Livro/${id}`);
setBook(records.data)
}
getBookById()
}, [])

const handleEditBook = async () => {
try {
const response = await api.put(`/Livro`, book);
if(response.status === 200) {
navigate('/bookshelf');
}
} catch (error) {
console.error(error);
alert('Erro ao criar um livro')
}
}

// um nome beeeeem bosta, mas não pensei direito
const handleEditChange = (event) => {
// ideia geral:
// pegar o dado que foi alterado, depois atualizar o state geral

// esse é o valor "alterado"

const aux = {...book}
aux[event.target.name] = event.target.value
setBook(aux)
}

return (
<>
  <HeaderComponent />

  <Box p={4}>
    <Flex align="center" justify="center" h="calc(100vh - 150px)">
      <Center w="100%" maxW={840} bg="white" top={100} position="absolute" borderRadius={5} p="6"
        boxShadow="0 1px 2px #ccc">

        <FormControl display="flex" flexDir="column" gap="4">
          <form onSubmit={handleSubmit(handleEditBook)}>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="title">Titulo</FormLabel>
                <Input id="title" name="titulo" value={book?.titulo} onChange={handleEditChange}
                  defaultValue={book?.titulo} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="author">Autor</FormLabel>
                <Input id="author" value={book?.autor} name="autor" onChange={handleEditChange}
                  defaultValue={book?.autor} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="description">Descrição</FormLabel>
                <Textarea id="desctiption" value={book?.descricao} name="descricao"
                  placeholder='Here is a sample placeholder' defaultValue={book?.descricao}
                  onChange={handleEditChange} />
                </Box>
          </HStack>
          <HStack justify="center">
            <Button
              w={240}
              p="6"
              type="submit"
              colorScheme={'teal'}
              color="white"
              fontWeight="bold"
              fontSize="xl"
              mt="2"
              _hover={{ bg: "rgb(0,128,128)" }}
            >
              Atualizar
            </Button>
          </HStack>
          </form>
        </FormControl>
        
      </Center>
    </Flex>
  </Box>
    </>
  );
}