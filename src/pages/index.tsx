import Head from 'next/head'
import { GetStaticProps } from 'next'

import { SubscribeButton } from '../components/SubscribeButton'
import styles from '../styles/Home.module.scss'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Inicio | IgNews</title>
      </Head>
      <main className={styles.Container}>
        <section>
          <p>👏 Hey, welcome</p>
          <h1>
            News about the <span>React</span> world
          </h1>
          <h2>
            Get acess to all the publications{' '}
            <span>for {product.amount} month</span>
          </h2>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img
          src="mulher.svg"
          alt="Woman coding"
          className={styles.WomanCoding}
        />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Iijm7AqqXXlG5am9Iz1toIi')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(price.unit_amount / 100))
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24hours
  }
}
