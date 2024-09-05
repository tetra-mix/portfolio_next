import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Title } from '../components/Title';
import { UIProvider, Center, Box, DiscList, ListItem } from "@yamada-ui/react";
import { HistoryItem } from '../components/HistoryItem';

const Home: React.FC = () => {

  return (
    <UIProvider>
      <Header />
      <div className="h-dvh w-dvw bg-blue-400">
        <Box padding="40vh 20vh">
          <Center>
            <h1 className="font-kosugi text-6xl text-white">Ryoma Yoshitaka</h1>
          </Center>
          <Center>
            <div className="font-mono pt-8 text-3xl text-white">
              My Engineering History
            </div>
          </Center>
        </Box>
      </div>
      <div className="h-dvh w-dvw bg-sky-100">
        <Box padding="40vh 20vh">
          <Center>
            <h1 className="text-6xl font-concert text-gray-800">About this site</h1>
          </Center>
          <Center>
            <div className="pt-8 text-md text-gray-800">
              このサイトは吉髙僚眞のポートフォリオサイトです。
            </div>
          </Center>
        </Box>
      </div>
      <div className="h-auto w-dvw bg-blue-100">
        <Box padding="20vh 20vh">
          <Center>
            <h1 className="text-6xl font-concert text-gray-800">My History</h1>
          </Center>
          <Center padding="30px 0">
            <div className="w-full lg:w-1/2">
              <HistoryItem year="2020年">
                <DiscList>
                  <ListItem>第4回U-16プログラミングコンテスト三重大会 最優秀賞受賞</ListItem>
                </DiscList>
              </HistoryItem>
              <HistoryItem year="2021年">
                <DiscList>
                  <ListItem>全国中学高校Webコンテスト 銀賞/ベストドメインネーミング賞 受賞</ListItem>
                </DiscList>
              </HistoryItem>
              <HistoryItem year="2022年">
                <DiscList>
                  <ListItem>ライフイズテックコンテスト 夏 SDGs問題解決部門 特別賞 受賞</ListItem>
                  <ListItem>ライフイズテックコンテスト 冬 身の回りの問題解決部門 優秀賞 受賞</ListItem>
                  <ListItem>第6回U-16プログラミングコンテスト三重大会 最優秀賞 受賞</ListItem>
                </DiscList>
              </HistoryItem>
              <HistoryItem year="2023年">
                <DiscList>
                  <ListItem>第6回U-16プログラミングコンテスト三重大会 最優秀賞 受賞</ListItem>
                  <ListItem>第25回全国中学高校Webコンテスト 金賞 受賞</ListItem>
                  <ListItem>三重県玉城町より 村山賞 受賞</ListItem>
                  <ListItem>鈴鹿高専 電子情報工学科に入学</ListItem>
                </DiscList>
              </HistoryItem>
              <HistoryItem year="2024年">
                <DiscList>
                  <ListItem>高専ビジネスコンテストin鈴鹿高専でギーク賞を受賞</ListItem>
                  <ListItem>NIT Toba Hackathon 企業賞 受賞</ListItem>
                  <ListItem>株式会社プロッセルでインターンを開始</ListItem>
                  <ListItem>2024年度 未踏ジュニアに採択</ListItem>
                </DiscList>
              </HistoryItem>
            </div>
          </Center>
        </Box>
      </div>
      <Footer />
    </UIProvider>
  );
};

export default Home;