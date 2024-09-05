import React from 'react';
import { Box, Center } from "@yamada-ui/react";
import { PageTemplate } from "../../components/PageTemplate";
import { ArticlesList } from '../../components/ArticlesList';

const Article: React.FC = () => {

  return (
    <PageTemplate title="Article">
      <Center>
        <div className="p-4 m-16 rounded-lg text-xl">
          私が書いた主に技術系の記事一覧です。
        </div>
      </Center>
      <ArticlesList/>
    </PageTemplate>
  );
};

export default Article;