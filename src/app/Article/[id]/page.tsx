'use client'

import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, Center } from "@yamada-ui/react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArticlesProps } from '@/components/Article';
import { PageTemplate } from "@/components/PageTemplate";
import { Title } from "@/components/Title";
import parse from "html-react-parser";

const Article: React.FC = () => {
    const [posts, setPosts] = useState<ArticlesProps>({ id: "", title: "", date: "", body: "" });
    const param = useParams();

    useEffect(() => {
        const id = param.id;
        const fetchPosts = async () => {
            const res = await axios.get('https://blog-test-dev.microcms.io/api/v1/articles/' + id, {
                headers: {
                    'X-MICROCMS-API-KEY': '2YBb9n1AIKYI0Ltk2AzmPh0bZtPRDkkCG1d1'
                }
            });
            setPosts(res.data);
            console.log(res.data);
        };

        fetchPosts();
    }, []);

    return (
        <PageTemplate title={"Article"}>
            <Center>
                <Title title={posts.title} text={posts.date} />
            </Center>
            <Center>
                <div className="parse">
                    {parse(posts.body)}
                </div>
            </Center>
            <Center p={16}>
                <Link href="/Article">
                    <Button colorScheme="secondary" variant="solid" size="lg">
                        一覧表示に戻る
                    </Button>
                </Link>
            </Center>
        </PageTemplate>
    );
};

export default Article;