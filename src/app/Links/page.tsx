import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import { UIProvider, Box, Center } from "@yamada-ui/react";

const Link: React.FC = () => {
  return (
    <UIProvider>
      <Header />
      <div className="h-dvh w-dvw bg-sky-100">
        <Box padding="40vh 20vh">
          <Center>
            <h1 className="text-6xl font-concert text-gray-800">Link</h1>
          </Center>
          <Center>
            
          </Center>
        </Box>
      </div>
      <Footer />
    </UIProvider>
  );
};
export default Link;