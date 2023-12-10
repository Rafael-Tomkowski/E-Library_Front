import {
  Center,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Box,
  Flex,
  HStack,
  Button
} from '@chakra-ui/react';

import useForm from '../hooks/useForm';
import { api } from '../service/api';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

export default function RegisterBook() {
  const [{values}, handleChange, handleSubmit] = useForm()
  const navigate = useNavigate()

  const handleCreateBook = async () => {
    try {
      const response = await api.post('/Livro', values);
      if(response.status === 200) {
        navigate('/bookshelf');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao criar um livro')
    }
  }

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
        maxW={840}
        bg="white"
        top={100}
        position="absolute"
        borderRadius={5}
        p="6"
        boxShadow="0 1px 2px #ccc"
      >
        <FormControl display="flex" flexDir="column" gap="4">
        <form onSubmit={handleSubmit(handleCreateBook)}>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="title">Titulo</FormLabel>
              <Input id="title" name="titulo" onChange={handleChange}/>
            </Box>
          </HStack>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="author">Autor</FormLabel>
              <Input id="author" name="autor" onChange={handleChange} />
            </Box>
          </HStack>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="description">Descrição</FormLabel>
              <Textarea id="desctiption" name="descricao" placeholder='Here is a sample placeholder' onChange={handleChange} />
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
              Registrar
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
