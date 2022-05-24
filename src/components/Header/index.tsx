import styles from './styles.module.scss';
import { SignInButton } from './SignInButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export function Header() {

  const { asPath } = useRouter()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <a>
            <img src="/logo.svg" alt="Ig News" />
          </a>

        </Link>
        <nav>

          <Link href="/" >
            <a className={asPath == '/' ? styles.active : ''}>Home</a>
          </Link>

          <Link href="/posts" >
            <a className={asPath == '/posts' ? styles.active : ''}>Posts</a>
          </Link>

        </nav>
        <SignInButton />
      </div>
    </header>
  )
}