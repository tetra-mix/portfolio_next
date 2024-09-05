'use client'

import { VStack, FormControl, Input, Textarea, Button, Center } from '@yamada-ui/react';
import { useState } from 'react';

export const Form = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleClick = () => {
        console.log(
            name,
            email,
            message
        )
    }

    return (
        <>
            <VStack padding="20">
                <FormControl label="お名前" pl={8}>
                    <Input placeholder="名無 太郎" onChange={(e) => { setName(e.target.value) }} />
                </FormControl>
                <FormControl label="E-メールアドレス" pt={4} pl={8} >
                    <Input type="email" placeholder="sample-user@exsample.com" onChange={(e) => { setEmail(e.target.value); }} />
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