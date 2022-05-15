import styles from '../posts/styles.module.scss'

export default function Posts() {
  return (
    <main className={styles.container}>
      <div className={styles.post}>
        <a href="http://localhost:3000">
          <time>15 de março de 2022</time>
          <h1>Creating a Monorepo with Lerna & Yarn Workspaces</h1>
          <p>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </p>
        </a>

        <a href="http://localhost:3000">
          <time>15 de março de 2022</time>
          <h1>Creating a Monorepo with Lerna & Yarn Workspaces</h1>
          <p>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </p>
        </a>
      </div>
    </main>
  )
}
