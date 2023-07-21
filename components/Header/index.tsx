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
              src="/logo.svg"
              alt="SIMPLE"
              className={styles.logo}
              width={348}
              height={133}
              priority
            />
          </Link>
        </header>
      </AnimatePresenceMotion>
    </Motion>
  );
}
