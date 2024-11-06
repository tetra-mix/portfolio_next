'use client'

import { VStack, FormControl, Input, Textarea, Button, Center, Text } from '@yamada-ui/react';
import { useState } from 'react';
import { render } from "@react-email/components";
import ClientEmail from '../../emails/toclient';
import OwnerEmail from '../../emails/toowner';
import Plunk from "@plunk/node";
import SendDiscordMessage from './Discord';

export const Form = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [textMessage, setTextMessage] = useState<string>("");

    const handleClick = async () => {
        console.log(name, email, title, message);
        setTextMessage("送信中です...");

        const plunk = new Plunk(process.env.NEXT_PUBLIC_PLUNK_SEKLET_KEY || "");


        //Emailを送信するプログラム
        const clientEmailHtml = await render(<ClientEmail email={email} title={title} message={message} name={name} />);
        const ownerEmailHtml = await render(<OwnerEmail email={email} title={title} message={message} name={name} />);

        plunk.emails.send({
            to: email,
            subject: "お問い合わせ内容の確認",
            body: clientEmailHtml,
        });

        plunk.emails.send({
            to: process.env.NEXT_PUBLIC_OWNER_EMAIL || "",
            subject: "お問い合わせがありました",
            body: ownerEmailHtml,
        });

        SendDiscordMessage({ name: name, email: email, title: title, message: message })
            .then((res) => {
                setTextMessage("送信が完了しました。");
                console.log(res)
            })
            .catch((e) => {
                setTextMessage("エラーが発生しました。");
                console.log(e)
            });

    }


    return (
        <div className='z-0'>
            <VStack padding={{ base: 30, sm: 4 }}>
                <Center>
                    <Text>{textMessage}</Text>
                </Center>
                <FormControl label="お名前">
                    <Input placeholder="名無 太郎" onChange={(e) => { setName(e.target.value) }} />
                </FormControl>
                <FormControl label="E-メールアドレス" pt={4}  >
                    <Input type="email" placeholder="sample-user@exsample.com" onChange={(e) => { setEmail(e.target.value); }} />
                </FormControl>
                <FormControl label="タイトル">
                    <Input placeholder="〇〇について" onChange={(e) => { setTitle(e.target.value) }} />
                </FormControl>
                <FormControl label="お問い合わせ内容" pt={4}>
                    <Textarea variant="filled" placeholder="お問い合わせ内容の本文" size="lg" h={250} onChange={(e) => { setMessage(e.target.value); }} />
                </FormControl>
            </VStack>
            <Center p="16">
                <Button colorScheme="secondary" variant="solid" size="lg" onClick={handleClick}>
                    送信
                </Button>
            </Center>
        </div>
    );
}