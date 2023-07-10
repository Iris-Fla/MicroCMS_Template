import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';
import { KiwiMaru } from './fonts';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'メルのブログ',
  description: 'microCMSのテンプレートを使って生成しています',
  openGraph: {
    title: 'メルのブログ',
    description: 'microCMSのテンプレートを使って生成しています',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body>
        <div className={KiwiMaru.className}>
          <Header />
          <Nav tags={tags.contents} />
          <div className={styles.main}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
