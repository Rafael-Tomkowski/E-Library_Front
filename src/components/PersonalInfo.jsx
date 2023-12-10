import React from 'react';
import {
  Box,
  HStack,
  Input,
  FormLabel,
  RadioGroup,
  Radio,
  Flex,
  Center
} from '@chakra-ui/react';

export default function PersonalInfo() {
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
<HStack spacing="4">
<Box w="100%">
  <FormLabel htmlFor="nome">Nome Completo</FormLabel>
  <Input id="nome" name='nome' />
</Box>
<Box w="100%">
  <FormLabel htmlFor="email">E-mail</FormLabel>
  <Input id="email" type="email" name='email'/>
</Box>
</HStack>
<HStack spacing="4">
<Box w="100%">
  <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
  <Input id="nasc" type="date" name='data'/>
</Box>
<Box w="100%">
  <FormLabel htmlFor="natural">Naturalidade</FormLabel>
  <Input id="natural" name='naturalidade' />
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
</Center>
</ Flex>
</ Box>
</>
)
}