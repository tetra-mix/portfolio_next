import { Box, Heading, Text } from '@yamada-ui/react';

export type TitleProps = {
  title: string;
  text?: string;
};

export const Title = (props: TitleProps) => {
  return (
    <Box padding={16}>
      {props.text && <Text fontSize="xl">{props.text}</Text>}
      <Heading size="2xl">{props.title}</Heading>
    </Box>
  );
};
