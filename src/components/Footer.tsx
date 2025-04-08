import { Flex, Text, Spacer } from '@yamada-ui/react';
import Link from 'next/link';

export const Footer = () => (
  <footer className="m-0">
    <Flex
      gap="sm"
      w="full"
      backgroundColor="blue.400"
      color="white"
      px={{ base: 20, sm: 4 }}
      py={2}
    >
      <Text fontSize={{ base: 'md', sm: 'xs' }}>©2024 Yoshitaka Ryoma </Text>
      <Spacer />
      <Link className="border-b border-white" href="/Contact" color="white">
        <Text fontSize={{ base: 'md', sm: 'xs' }}>お問い合わせはこちらから</Text>
      </Link>
    </Flex>
  </footer>
);
