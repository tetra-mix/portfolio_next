import { Flex, Heading, HStack, Spacer, Menu, MenuButton, MenuList, MenuItem, Button } from '@yamada-ui/react';
import Link from 'next/link';

export const Header = () => (
    <header className="z-50">
      <div className="w-dvw bg-gray-100 bg-opacity-75">
        <Flex gap="md" w="full" color="gray.600" px={{base:"20", sm:"2"}} py={2} >
          <Heading>clowntetra.jp</Heading>
          <Spacer />
          <HStack display={{ base: 'flex', sm: 'none' }} gap="md" >
            <Link href="/">Home</Link>
            <Link href="/Profile">Profile</Link>
            <Link href="/Article">Article</Link>
            <Link href="/Works">Works</Link>
            <Link href="/Contact">Contact</Link>
          </HStack>

          <Menu>
            <MenuButton as={Button} display={{base:"none", sm:'block'}} bg="blue.800" border={"solid"} borderColor={"white"} color={"white"}>
              Menu
            </MenuButton>

            <MenuList>
              <MenuItem><Link href="/">Home</Link></MenuItem>
              <MenuItem><Link href="/Profile">Profile</Link></MenuItem>
              <MenuItem><Link href="/Article">Article</Link></MenuItem>
              <MenuItem><Link href="/Works">Works</Link></MenuItem>
              <MenuItem><Link href="/Contact">Contact</Link></MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </div>
    </header>
);
