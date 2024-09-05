import { Flex, Text, Spacer} from '@yamada-ui/react';
import Link from "next/link";

export const Footer = () => (
    <footer className="m-0">
        <Flex gap="md" w="full" backgroundColor="blue.400" color="white" px={20} py={2} >
          <Text>©2024 Yoshitaka Ryoma </Text>
          <Spacer />
          <Link href="/Contact" color="white" style={{borderBottom: "solid 1px white"}}>お問い合わせはこちらから</Link>
        </Flex>
    </footer>
);
