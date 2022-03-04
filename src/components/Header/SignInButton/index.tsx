import { AiFillGithub } from 'react-icons/Ai'
import { FiX } from 'react-icons/Fi'
import styles from '../SignInButton/styles.module.scss'

export function SignInButton() {
  const isUserLogged = false

  return (
    <div className={styles.Content}>
      {isUserLogged ? (
        <button>
          <AiFillGithub color="#eba417" />
          Sign in with github
        </button>
      ) : (
        <button>
          <AiFillGithub color="#04d361" />
          Josué Amorim
          <FiX />
        </button>
      )}
    </div>
  )
}
