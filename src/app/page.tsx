import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { UIProvider, Center, DiscList, ListItem, Text } from '@yamada-ui/react';
import { HistoryItem } from '../components/HistoryItem';
const Home: React.FC = () => {
  return (
    <UIProvider>
      <Header />
      <div className="min-h-dvh w-dvw bg-blue-400">
        <div className="pt-64 lg:pt-96 pl-16 pr-16 lx:pl-72 lx:pr-72">
          <Center>
            <h1 className="font-kosugi text-6xl text-white">Ryoma Yoshitaka</h1>
          </Center>
          <Center>
            <div className="font-mono pt-8 text-3xl text-white">My Engineering History</div>
          </Center>
        </div>
      </div>
      <div className="min-h-dvh w-dvw bg-sky-100">
        <div className="pt-48 lg:pt-72 pl-4 pr-4 md:pl-16 md:pr-16 lx:pl-72 lx:pr-72">
          <Center>
            <h1 className="text-5xl md:text-6xl font-concert text-gray-800">About this site</h1>
          </Center>
          <Center>
            <div className="pt-8 pl-4 pr-4 md:pr-0 md:pl-0 text-md text-gray-800">
              このサイトは吉髙僚眞のポートフォリオサイトです。
            </div>
          </Center>
        </div>
      </div>
      <div className="min-h-dvh w-dvw bg-blue-100">
        <div className="pt-32 pl-4 pr-4 md:pl-16 md:pr-16lx:pl-72 lx:pr-72">
          <Center>
            <h1 className="text-5xl md:text-6xl font-concert text-gray-800">My History</h1>
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
                  <ListItem>
                    全国中学高校Webコンテスト 銀賞/ベストドメインネーミング賞 受賞
                  </ListItem>
                </DiscList>
              </HistoryItem>
              <HistoryItem year="2022年">
                <DiscList>
                  <ListItem>ライフイズテックコンテスト 夏 SDGs問題解決部門 特別賞 受賞</ListItem>
                  <ListItem>
                    ライフイズテックコンテスト 冬 身の回りの問題解決部門 優秀賞 受賞
                  </ListItem>
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
                  <ListItem>NIT Toba Hackathon 2024 企業賞 受賞</ListItem>
                  <ListItem>株式会社プロッセルでインターンを開始</ListItem>
                  <ListItem>2024年度 未踏ジュニアに採択</ListItem>
                  <ListItem>未踏ジュニア スーパークリエータ認定</ListItem>
                </DiscList>
              </HistoryItem>
              <HistoryItem year="2025年">
                <DiscList>
                  <ListItem>Web×IotメーカーズチャレンジPLUS 2024 三重大会 最優秀賞 受賞</ListItem>
                  <ListItem>高専ビジネスコンテストin鈴鹿高専2024 企業賞 受賞</ListItem>
                  <ListItem>KOSEN TECH FES DAO型ハッカソン 発展賞 & 1位 受賞</ListItem>
                  <ListItem>NIT Toba Hackathon 2025 企業賞 受賞</ListItem>
                  <ListItem>Web×IotメーカーズチャレンジPLUS 2024 グランプリ 受賞</ListItem>
                  <ListItem>Kloudハッカソン#6 最優秀賞 受賞</ListItem>
                </DiscList>
              </HistoryItem>
            </div>
          </Center>
        </div>
      </div>
      <Footer />
    </UIProvider>
  );
};

export default Home;
