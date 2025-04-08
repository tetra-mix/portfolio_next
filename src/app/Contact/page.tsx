import React from 'react';
import { Form } from '../../components/Form';
import { Box } from '@yamada-ui/react';
import { PageTemplate } from '../../components/PageTemplate';

const Contact: React.FC = () => {
  return (
    <PageTemplate title="Contact">
      <Box>
        <Form />
      </Box>
    </PageTemplate>
  );
};
export default Contact;
