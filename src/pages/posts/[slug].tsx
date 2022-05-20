import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import styles from './posts.module.scss'

interface PostProps {
  post: {
    slug: string;
    title: string;
    updatedAt: string;
    content: string;
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div dangerouslySetInnerHTML={{ __html: post.content }} className={styles.content} />
        </article>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

  const session = await getSession({ req });

  // if (!session){
  //   do somenthing
  // }

  const { slug } = params;

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID<any>('ignews385', String(slug), {
    //add Params
  })

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    ),
    content: RichText.asHtml(response.data.content),

  }

  return {
    props: { post }
  }
}