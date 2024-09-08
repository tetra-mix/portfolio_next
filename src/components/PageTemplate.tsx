
import { UIProvider, Center } from "@yamada-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { ReactNode } from 'react';

type pageTemplateProps = {
  title: string,
  children: ReactNode
}


export const PageTemplate = (props: pageTemplateProps) => {
  return (
    <UIProvider>
      <Header />
      <div className="min-h-dvh w-dvw bg-blue-50">
        <div className='pt-32 pl-2 pr-2 m-0 md:pl-16 md:pr-16 lg:pl-64 lg:pr-64'>
          <Center>
            <h1 className="text-6xl font-concert text-gray-800">{props.title}</h1>
          </Center>
          {
            props.children
          }
        </div>
      </div>
      <Footer />
    </UIProvider>
  );
}