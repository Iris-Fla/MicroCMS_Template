import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';
import { KiwiMaru } from './fonts';
import Motion from './motion';
import AnimatePresenceMotion from './motion';

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
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={styles.bg}> {/* 追加 */}
                <Motion>
                    <AnimatePresenceMotion>
                        <div className={KiwiMaru.className}>
                            <Header />
                            <Nav tags={tags.contents} />
                            <div className={styles.main}>{children}</div>
                            <Footer />
                        </div>
                    </AnimatePresenceMotion>
                </Motion>
            </body>
        </html>
    );
}
