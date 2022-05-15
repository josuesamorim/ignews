import styles from '../../styles/Header.module.scss'
import { SignInButton } from './SignInButton'
import Link from 'next/link'
import Head from 'next/head'

export function Header() {
  return (
    <>
      <Head>
        <title>ignews | Posts</title>
      </Head>

      <div className={styles.Container}>
        <div className={styles.Content}>
          <img src="logo.svg" alt="IgNews" />
          <nav>
            <ul>
              <li className={styles.active}>
                <Link href="http://localhost:3000">Home</Link>
              </li>
              <li>
                <Link href="http://localhost:3000/posts">Posts</Link>
              </li>
            </ul>
          </nav>

          <SignInButton />
        </div>
      </div>
    </>
  )
}
