import React from 'react';
import PersonalInfo from '../components/PersonalInfo';
import ReservedBooks from '../components/Reserved';
import BorowedBooks from '../components/Loan';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';

import HeaderComponent from '../components/HeaderComponent';


export default function Profile() {

  return (
    <>
     <HeaderComponent />
      <Tabs>
  <TabList>
    {/* <Tab>Informações pessoais</Tab> */}
    {/* <Tab>Lista de reservas</Tab> */}
    <Tab>Lista de retirados</Tab>
  </TabList>

  <TabPanels>
    {/* <TabPanel>
      < PersonalInfo />
    </TabPanel> */}
    {/* <TabPanel>
      <ReservedBooks />
    </TabPanel> */}
    <TabPanel>
      <BorowedBooks />
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
  );
}