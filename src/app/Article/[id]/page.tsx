import axios from "axios";
import React, { use } from 'react';
import { Button, Center } from "@yamada-ui/react";
import Link from "next/link";
import { ArticlesProps } from '@/components/Article';
import { PageTemplate } from "@/components/PageTemplate";
import { Title } from "@/components/Title";
import parse from "html-react-parser";

export const generateStaticParams = async () => {
    const res = await axios.get('https://blog-test-dev.microcms.io/api/v1/articles', {
        headers: {
            'X-MICROCMS-API-KEY': '2YBb9n1AIKYI0Ltk2AzmPh0bZtPRDkkCG1d1'
        }
    });

    const articles:ArticlesProps[] = res.data.contents;
    
    return articles.map((article: { id: string }) => ({
        id: article.id,
    }));
}
async function fetchArticle(id: string) {
    const res = await axios.get(`https://blog-test-dev.microcms.io/api/v1/articles/${id}`, {
        headers: {
            'X-MICROCMS-API-KEY': '2YBb9n1AIKYI0Ltk2AzmPh0bZtPRDkkCG1d1'
        }
    });
    const post:ArticlesProps = res.data;
    return post;
}

interface ArticlePageProps {
    params: { id: string };
}

export default function Article({ params }: ArticlePageProps) {
    const { id } = params;
    const article = use(fetchArticle(id));


    return (
        <PageTemplate title={"Article"}>
            <Center>
                <Title title={article.title} text={article.date} />
            </Center>
            <Center>
                <div className="parse">
                    {parse(article.body)}
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
