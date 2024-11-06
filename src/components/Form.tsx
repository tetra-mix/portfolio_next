'use client'
import { Box, VStack, FormControl, Input, Textarea, Button, Center, Text } from '@yamada-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form"
import { render } from "@react-email/components";
import { EmailProps } from './type';
import ClientEmail from '../../emails/toclient';
import OwnerEmail from '../../emails/toowner';
import Plunk from "@plunk/node";
import SendDiscordMessage from './Discord';


export const Form = () => {
    const [textMessage, setTextMessage] = useState<string>("");

    const { register, handleSubmit, formState: { errors } } = useForm<EmailProps>();

    const onSubmit: SubmitHandler<EmailProps> = async (data) => {
        console.log(data.name, data.email, data.title, data.message);
        setTextMessage("送信中です...");

        const plunk = new Plunk(process.env.NEXT_PUBLIC_PLUNK_SEKLET_KEY || "");


        //Emailを送信するプログラム
        const clientEmailHtml = await render(<ClientEmail email={data.email} title={data.title} message={data.message} name={data.name} />);
        const ownerEmailHtml = await render(<OwnerEmail email={data.email} title={data.title} message={data.message} name={data.name} />);

        plunk.emails.send({
            to: data.email,
            subject: "お問い合わせ内容の確認",
            body: clientEmailHtml,
        });

        plunk.emails.send({
            to: process.env.NEXT_PUBLIC_OWNER_EMAIL || "",
            subject: "お問い合わせがありました",
            body: ownerEmailHtml,
        });

        SendDiscordMessage(data)
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack padding={{ base: 30, sm: 4 }}>
                    <Center>
                        <Text>{textMessage}</Text>
                    </Center>
                    <FormControl label="お名前">
                        <Input placeholder="名無 太郎" {...register('name', { required: '名前を入力してください' })} />
                        <Box>
                            {errors.name && <Text color="red.500" mt="1">{errors.name.message?.toString()}</Text>}
                        </Box>
                    </FormControl>
                    <FormControl label="E-メールアドレス" pt={4}  >
                        <Input type="email" placeholder="sample-user@exsample.com" 
                            {...register('email', {
                                required: 'メールアドレスを入力してください',
                                pattern: {
                                    value:
                                      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                                    message: "正しいメールアドレスを入力してください。",
                                  },
                            }, )} />
                        <Box>
                            {errors.email && <Text color="red.500" mt="1">{errors.email.message?.toString()}</Text>}
                        </Box>
                    </FormControl>
                    <FormControl label="件名">
                        <Input placeholder="〇〇について" {...register('title', { required: '件名を入力してください' })} />
                        <Box>
                            {errors.title && <Text color="red.500" mt="1">{errors.title.message?.toString()}</Text>}
                        </Box>
                    </FormControl>
                    <FormControl label="お問い合わせ内容" pt={4}>
                        <Textarea variant="filled" placeholder="お問い合わせ内容の本文" size="lg" h={250} {...register('message', { required: 'お問い合わせ内容を入力してください' })} />
                        <Box>
                            {errors.message && <Text color="red.500" mt="1">{errors.message.message?.toString()}</Text>}
                        </Box>
                    </FormControl>
                </VStack>

                <Center p="16">
                    <Button colorScheme="secondary" variant="solid" size="lg" type="submit">
                        送信
                    </Button>
                </Center>
            </form>
        </div>
    );
}