import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  Center,
  FormControl,
  Input,
  FormLabel,
  Link
} from '@chakra-ui/react';
import HeaderComponent from '../components/HeaderComponent';

export default function Login() {

  return (
    <>
      <HeaderComponent />

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
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input id="email" type="email" />
            </Box>
          </HStack>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="cel">Senha</FormLabel>
              <Input id="cel" type="password" />
            </Box>
          </HStack>
          <Link 
          as ="a"
          href='registercostumer'>
            Não tem login? Cadastre-se!
          </Link>
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
              Enviar
            </Button>
          </HStack>
        </FormControl>
      </Center>
    </Flex>
    </>
  );
}
