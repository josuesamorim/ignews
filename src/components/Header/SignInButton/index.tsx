import { AiFillGithub } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from '../SignInButton/styles.module.scss'

export function SignInButton() {
  const { data: session } = useSession()

  return (
    <div className={styles.Content}>
      {session ? (
        <button onClick={() => signOut()}>
          <AiFillGithub color="#04d361" />
          {session.user.name}
          <FiX />
        </button>
      ) : (
        <button onClick={() => signIn('github')}>
          <AiFillGithub color="#eba417" />
          Sign in with github
        </button>
      )}
    </div>
  )
}
