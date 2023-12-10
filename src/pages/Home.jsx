import HeaderComponent from '../components/HeaderComponent';
import { HStack, Flex, Box, Center, Text } from '@chakra-ui/react';

export default function Home() {
  return(
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
          maxW={1000}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
<HStack spacing="4">
<Box w="100%">
  <Text fontSize='6xl'> Bem vindo a E-Library</Text>
  <Text fontSize='2xl'>Registre, edite e faça a retirada dos nossos livros através do <Text as='b'>E-Library!</Text></Text>
  <Text fontSize='2xl'>Encontre uma enorme variedade de livros acessando a nossa <a href="/bookshelf"><Text as='u'>estante virtual</Text></a>, conferindo por titulos, autores e suas descrições!</Text>
</Box>
</HStack>
</Center>
</Flex>
</Box>
    </>
  )
}