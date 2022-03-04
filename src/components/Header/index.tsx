import styles from '../../styles/Header.module.scss'
import { SignInButton } from './SignInButton'

export function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <img src="logo.svg" alt="IgNews" />
        <nav>
          <ul>
            <li className={styles.active}>Home</li>
            <li>Posts</li>
          </ul>
        </nav>

        <SignInButton />
      </div>
    </div>
  )
}
