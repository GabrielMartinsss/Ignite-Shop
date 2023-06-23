import { stripe } from "@/lib/stripe";
import { ImageContainer, ImagesContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

import logoImg from '@/assets/logo.svg'

interface SuccessProps {
  customerName: string
  products: [
    {
      name: string
      images: string
    }
  ]
  
}

const pageTitle = 'Compra efetuada | Ignite Shop'

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <Image src={logoImg} alt=''/>

        <ImagesContainer>
          {products.map((product) => {
            return (
              <ImageContainer key={product.name}>
                <Image src={product.images[0]} width={120} height={120} alt=""/>
              </ImageContainer>
            )
          })}
        </ImagesContainer>

        <h1>Compra efetuada</h1>
        <p>Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa</p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'] 
  })

  const customerName = session.customer_details?.name
  const products  = session.line_items!.data.map(item => {
    return item.price!.product as Stripe.Product
  })

  return {
    props: {
      customerName,
      products
    }
  }
}