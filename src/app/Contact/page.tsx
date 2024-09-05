import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import { Form } from '../../components/Form';
import { UIProvider } from "@yamada-ui/react";

const Contact: React.FC = () => {

  return (
    <UIProvider>
      <Header />
        <Title title="Contact" />
        <Form />
      <Footer />
    </UIProvider>
  );
};
export default Contact;