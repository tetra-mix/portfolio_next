import { Image, Center, Card, Box, CardBody, CardFooter, Heading, Text, Icon } from '@yamada-ui/react';
import { FaYoutube, FaGithub } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";


export type WorkProps = {
    image: {
        url: string;
    }
    title: string;
    subtitle: string;
    body: string;
    link?: {
        Youtube?: string;
        Github?: string;
        Website?: string;
    }
}

export const Work = (props: WorkProps) => {
    return (
        <Card variant="elevated" bgColor="white" w={{base:"100%", sm:"25vw" }}m="2" h="575px" >
            <CardBody>
                <Heading size="sm">
                    {props.subtitle}
                </Heading>
                <Heading size="lg">
                    {props.title}
                </Heading>
                <Center>
                    <Box minW="50%" maxW="75%" h="275px">
                        <Image src={props.image.url} alt={props.title} maxWidth="100%" maxH="375px" rounded="md" />
                    </Box>
                </Center>

                <Text>
                    {props.body}
                </Text>
            </CardBody>
            <CardFooter>
                <Text>
                    {
                        props.link?.Youtube ? (
                            <a href={props.link.Youtube}>
                                <Icon as={FaYoutube} mr="2" color="blue.800" />
                                <span className='text-blue-800'>YouTube</span>
                            </a>
                        ) : <></>
                    }
                    {
                        props.link?.Github ? (
                            <a href={props.link.Github}>
                                <Icon as={FaGithub} mr="2" color="blue.800" />
                                <span className='text-blue-800'>Github</span>
                            </a>
                        ) : <></>
                    }
                    {
                        props.link?.Website ? (
                            <a href={props.link.Website}>
                                <Icon as={CgWebsite} mr="2" color="blue.800"/>
                                <span className='text-blue-800'>Website</span>
                            </a>
                        ) : <></>
                    }
                </Text>
            </CardFooter>
        </Card>
    );
}