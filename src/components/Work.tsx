import { Center, Card, Box, CardBody, CardFooter, Heading, Text, Icon } from '@yamada-ui/react';
import { FaYoutube, FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import ExportedImage from 'next-image-export-optimizer';

export type WorkProps = {
  image: {
    url: string;
  };
  title: string;
  subtitle: string;
  body: string;
  link?: {
    Youtube?: string;
    Github?: string;
    Website?: string;
  };
};

export const Work = (props: WorkProps) => {
  return (
    <Card variant="elevated" bgColor="white" w={{ base: '95%' }} m="2" h="575px">
      <CardBody>
        <Heading size="sm">{props.subtitle}</Heading>
        <Heading size="lg">{props.title}</Heading>
        <Center>
          <Box minW="50%" maxW="75%" h="275px">
            <ExportedImage
              src={props.image.url}
              alt={props.title}
              width={100}
              height={100}
              style={{ maxWidth: '100%', width: '110%', maxHeight: '375px', borderRadius: '12px' }}
            />
          </Box>
        </Center>

        <Text>{props.body}</Text>
      </CardBody>
      <CardFooter>
        <Text>
          {props.link?.Youtube ? (
            <a href={props.link.Youtube} className="mr-4">
              <Icon as={FaYoutube} mr="1" color="blue.800" />
              <span className="text-blue-800">YouTube</span>
            </a>
          ) : (
            <></>
          )}
          {props.link?.Github ? (
            <a href={props.link.Github} className="mr-4">
              <Icon as={FaGithub} mr="1" color="blue.800" />
              <span className="text-blue-800">Github</span>
            </a>
          ) : (
            <></>
          )}
          {props.link?.Website ? (
            <a href={props.link.Website} className="mr-4">
              <Icon as={CgWebsite} mr="1" color="blue.800" />
              <span className="text-blue-800">Website</span>
            </a>
          ) : (
            <></>
          )}
        </Text>
      </CardFooter>
    </Card>
  );
};
