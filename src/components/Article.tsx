import { Center, Card, Box, CardBody, Heading } from '@yamada-ui/react';
//import Image from "next/image";
import ExportedImage from 'next-image-export-optimizer';
import Link from "next/link";
import NoImage from "../assets/no_image_logo.png";

export type ArticlesProps = {
    id: string;
    image?: {
        url: string;
    }
    title: string;
    date: string;
    body: string;
}

export const Article = (props: ArticlesProps) => {

    const url: string  = "/Article/" + props.id; 

    return (
        <Link href={url} >
            <Card variant="elevated" bgColor="white" w={{ base: "95%" }} m="2" h="350px" >
                <CardBody>
                    <Heading size="sm">
                        {props.date}
                    </Heading>
                    <Heading size="md">
                        {props.title}
                    </Heading>
                    <Center>
                        <Box minW="50%" maxW="75%" h="275px">
                            {
                                props.image ? (
                                    <ExportedImage src={props.image.url} alt={props.title} style={{ maxWidth: "100%", maxHeight:"400px", borderRadius:"12px" }} />
                                ) : <ExportedImage src={NoImage} alt={props.title} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                            }
                        </Box>
                    </Center>

                </CardBody>
            </Card>
        </Link>

    );
}