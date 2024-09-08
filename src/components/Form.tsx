'use client'

import { VStack, FormControl, Input, Textarea, Button, Center,Text } from '@yamada-ui/react';
import { useState } from 'react';

export const Form = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [textMessage, setTextMessage] = useState<string>("");

    const handleClick = async () => {
        console.log(name,email,title,message);
        setTextMessage("送信できません。仕様的に...")
        //Emailを送信するプログラム
    }


    return (
        <>
            <VStack padding="20">
                <Center>
                    <Text>{textMessage}</Text>
                </Center>
                <FormControl label="お名前" pl={8}>
                    <Input placeholder="名無 太郎" onChange={(e) => { setName(e.target.value) }} />
                </FormControl>
                <FormControl label="E-メールアドレス" pt={4} pl={8} >
                    <Input type="email" placeholder="sample-user@exsample.com" onChange={(e) => { setEmail(e.target.value); }} />
                </FormControl>
                <FormControl label="タイトル" pl={8}>
                    <Input placeholder="〇〇について" onChange={(e) => { setTitle(e.target.value) }} />
                </FormControl>
                <FormControl label="お問い合わせ内容" pt={4} pl={8}>
                    <Textarea variant="filled" placeholder="お問い合わせ内容の本文" size="lg" h={250} onChange={(e) => { setMessage(e.target.value); }} />
                </FormControl>
            </VStack>
            <Center p="16">
                <Button colorScheme="secondary" variant="solid" size="lg" onClick={handleClick}>
                    送信
                </Button>
            </Center>
        </>
    );
}