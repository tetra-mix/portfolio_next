import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import { UIProvider, Box, Center } from "@yamada-ui/react";

const Article: React.FC = () => {

  return (
    <UIProvider>
      <Header />
      <div className="h-dvh w-dvw bg-sky-100">
        <Box padding="40vh 20vh">
          <Center>
            <h1 className="text-6xl font-concert text-gray-800">Article</h1>
          </Center>
          <Center>
            <div className="pt-8 text-md text-gray-800">
              記事一覧
            </div>
          </Center>
        </Box>
      </div>
      <Footer />
    </UIProvider>
  );
};

export default Article;