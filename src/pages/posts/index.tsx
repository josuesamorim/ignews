import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
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

const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'ignews')],
    {
      fetch: ['ignews.title', 'ignews.content'],
      pageSize: 100
    }
  )

  console.log(response)

  return {
    props: {
      response
    }
  }
}
