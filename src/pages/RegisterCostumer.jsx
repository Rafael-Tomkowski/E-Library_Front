import React from 'react';
import {
  Box,
  Center,
  Flex,
  HStack,
  Button,
  FormControl,
  Input,
  FormLabel,
  RadioGroup,
  Radio
} from '@chakra-ui/react';
import useForm from '../hooks/useForm';
import { api } from '../service/api';
import HeaderComponent from '../components/HeaderComponent';

export default function RegisterCostumer() {
  const [{values}, handleChange, handleSubmit] = useForm()

  const handleCreateUser = async () => {
    try {
      const response = await api.post('/Usuario', values);
      if(response.status === 200) {
        alert('usuário criado com sucesso')
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao criar um usuário')
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
        <form onSubmit={handleSubmit(handleCreateUser)}>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="nome">Nome Completo</FormLabel>
              <Input id="nome" name='nome' onChange={handleChange}/>
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input id="email" type="email" name='email' onChange={handleChange}/>
            </Box>
          </HStack>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
              <Input id="nasc" type="date" name='data' onChange={handleChange}/>
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="natural">Naturalidade</FormLabel>
              <Input id="natural" name='naturalidade' onChange={handleChange}/>
            </Box>
          </HStack>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="cel">Senha</FormLabel>
              <Input id="cel" type="password" name='senha'onChange={handleChange}/>
            </Box>
          </HStack>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel>Sexo</FormLabel>
              <RadioGroup defaultValue="Masculino">
                <HStack spacing="24px">
                  <Radio value="Masculino">Masculino</Radio>
                  <Radio value="Feminino">Feminino</Radio>
                  <Radio value="Outro">Outro</Radio>
                </HStack>
              </RadioGroup>
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
