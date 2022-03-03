import { AiFillGithub } from 'react-icons/Ai'
import styles from '../../styles/Header.module.scss'

export function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <img src="logo.svg" alt="IgNews" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Posts</li>
          </ul>
        </nav>

        <button>
          <AiFillGithub />
          Sign in with github
        </button>
      </div>
    </div>
  )
}
