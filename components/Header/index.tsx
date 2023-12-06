import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Motion from './headerhober';
import AnimatePresenceMotion from './headerhober';

export default function Header() {
    return (
        <Motion>
            <AnimatePresenceMotion>
                <header className={styles.header}>
                    <Link href="/">
                        <Image
                            src="/suimeru.svg"
                            alt="Logo"
                            className={styles.logo}
                            width={500}
                            height={150}
                            priority
                        />
                    </Link>
                </header>
            </AnimatePresenceMotion>
        </Motion>
    );
}
