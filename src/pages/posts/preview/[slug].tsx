import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";
import { useEffect } from "react";
import { getPrismicClient } from "../../../services/prismic";
import styles from '../../posts/posts.module.scss'

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    updatedAt: string;
    content: string;
  }
}

export default function PostPreview({ post }: PostPreviewProps) {

  const { data: session } = useSession();

  const router = useRouter()

  useEffect(() => {
    if (session?.userActiveSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div dangerouslySetInnerHTML={{ __html: post.content }} className={`${styles.content} ${styles.previewContent}`} />
          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">
              <a>Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params;

  const prismic = getPrismicClient()

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
    content: RichText.asHtml(response.data.content.splice(0, 1)),

  }

  return {
    props: { post },
    revalidate: 60 * 30 //30 minutes
  }
}