import { Flex, Text, Link, Heading, HStack, UIProvider, Spacer} from '@yamada-ui/react';

export const Footer = () => (
    <footer className="m-0">
        <Flex gap="md" w="full" backgroundColor="blue.400" color="white" px={20} py={2} >
          <Text>©2024 Yoshitaka Ryouma </Text>
          <Spacer />
          <Link color="white">お問い合わせはこちらから</Link>
        </Flex>
    </footer>
);
