'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article, ArticlesProps  } from './Article';

export const ArticlesList = () => {
    const [posts, setPosts] = useState<ArticlesProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://blog-test-dev.microcms.io/api/v1/articles', {
                headers: {
                    'X-MICROCMS-API-KEY': '2YBb9n1AIKYI0Ltk2AzmPh0bZtPRDkkCG1d1'
                }
            });
            setPosts(res.data.contents);
        };

        fetchPosts();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <div key={index}>
                    <Article id={post.id} title={post.title} date={post.date} body={post.body} image={post.image} />
                </div>
            ))}
        </div>
    );
}