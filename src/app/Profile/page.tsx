import React from 'react';
import { Center, Grid, GridItem, Text, Box} from "@yamada-ui/react";
import Image from "next/image";
import { PageTemplate } from '../../components/PageTemplate';
import ProfileImage from '../../assets/profile.jpeg';
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSquareXTwitter, FaYoutube, FaDiscord } from "react-icons/fa6";

const Links: React.FC = () => {
  return (
    <PageTemplate title="Profile">
      <Box display={{ base: "block", sm: "none" }}>
        <Grid w="full" templateColumns="repeat(6, 1fr)" templateRows="repeat(4, 1fr)" gap="md" padding={4} margin={2}>
          <GridItem colSpan={3} rowSpan={3} w="full" minH="4xs" rounded="md" bg="white" borderWidth="1px" borderColor="sky.100">
            <Image src={ProfileImage} alt="プロフィール画像" style={{ borderRadius: 16 }} />
          </GridItem>
          <GridItem colSpan={3} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="1px" borderColor="blue.100" >
            <Center>
              <h1 className="text-4xl text-gray-800 p-2">吉髙 僚眞</h1>
            </Center>
            <Center>
              <h1 className="text-4xl text-gray-800 p-2">- Ryoma Yoshitaka -</h1>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="blue.500" >
            <Center pt="2">
              <FaGithub size="64" color="#4387f4" />
            </Center>
            <Center>
              <Text fontSize="lg" color="blue.500">Github</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="blue.700">
            <Center pt="2">
              <FaSquareXTwitter size="64" color="#0c59d4" />
            </Center>
            <Center>
              <Text fontSize="lg" color="blue.700">X/Twitter</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="blue.900">
            <Center pt="2">
              <FaYoutube size="64" color="#07357d" />
            </Center>
            <Center>
              <Text fontSize="lg" color="blue.900">Youtube</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="sky.900">
            <Center pt="2">
              <FaYoutube size="64" color="#032230" />
            </Center>
            <Center>
              <Text fontSize="lg" color="sky.900">Youtube</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="sky.700">
            <Center pt="2">
              <FaDiscord size="64" color="#096995" />
            </Center>
            <Center>
              <Text fontSize="lg" color="sky.700">Discord</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="sky.500">
            <Center pt="2">
              <CiMail size="64" color="#0da2e7" />
            </Center>
            <Center>
              <Text fontSize="lg" color="sky.500">E-mail</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={6} rowSpan={2} w="full" minH="4xs" rounded="md" bg="white" borderWidth="1px" borderColor="sky.100">
            <Text p="2">コメント。何か書く</Text>
          </GridItem>
        </Grid>
      </Box>


      {/*スマートフォン */}
      <Box display={{ base: 'none', sm: 'block' }}>
        <Grid w="full" templateColumns="repeat(3, 1fr)" templateRows="repeat(8, 1fr)" gap="md" padding={4} margin={2}>
          <GridItem colSpan={3} rowSpan={3} w="full" minH="4xs" rounded="md" bg="white" borderWidth="1px" borderColor="sky.100">
            <Image src={ProfileImage} alt="プロフィール画像" style={{ borderRadius: 16 }} />
          </GridItem>
          <GridItem colSpan={3} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="1px" borderColor="blue.100" >
            <Center>
              <h1 className="text-3xl text-gray-800 p-2">吉髙 僚眞</h1>
            </Center>
            <Center>
              <h1 className="text-xl text-gray-800 p-2">- Ryoma Yoshitaka -</h1>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="blue.500" >
            <Center pt="2">
              <FaGithub size="64" color="#4387f4" />
            </Center>
            <Center>
              <Text fontSize="lg" color="blue.500">Github</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="blue.700">
            <Center pt="2">
              <FaSquareXTwitter size="64" color="#0c59d4" />
            </Center>
            <Center>
              <Text fontSize="lg" color="blue.700">X/Twitter</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="blue.900">
            <Center pt="2">
              <FaYoutube size="64" color="#07357d" />
            </Center>
            <Center>
              <Text fontSize="lg" color="blue.900">Youtube</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="sky.900">
            <Center pt="2">
              <FaYoutube size="64" color="#032230" />
            </Center>
            <Center>
              <Text fontSize="lg" color="sky.900">Youtube</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="sky.700">
            <Center pt="2">
              <FaDiscord size="64" color="#096995" />
            </Center>
            <Center>
              <Text fontSize="lg" color="sky.700">Discord</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} w="full" minH="4xs" rounded="md" bg="white" borderWidth="2px" borderColor="sky.500">
            <Center pt="2">
              <CiMail size="64" color="#0da2e7" />
            </Center>
            <Center>
              <Text fontSize="lg" color="sky.500">E-mail</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={3} rowSpan={2} w="full" minH="4xs" rounded="md" bg="white" borderWidth="1px" borderColor="sky.100">
            <Text p="2">コメント。何か書く</Text>
          </GridItem>
        </Grid>
      </Box>
    </PageTemplate>
  );
};
export default Links;