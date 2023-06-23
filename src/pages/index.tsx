import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Footer, CarrocelContainer, Product, HomeContainer } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Handbag } from '@phosphor-icons/react'

import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { useContext } from "react";
import { BagContext } from "@/context/BagContext";
import { Header } from "@/components/Header";

interface ProductProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }[]
}

export default function Home({ products }: ProductProps) {
  const { addProductToBag } = useContext(BagContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  function handleAddProductToBag(product: any) {
    addProductToBag(product)
  }

  const pageTitle = 'Home | Ignite Shop'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header />

      <HomeContainer>
        <CarrocelContainer ref={sliderRef} className="keen-slider">
          {products.map(product => {
            return (
                <Product className="keen-slider__slide" key={product.id}>
                  <Link href={`/product/${product.id}`}   prefetch={false} >    
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                  </Link>
                  <Footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>
                    <button onClick={() => handleAddProductToBag(product)}>
                      <Handbag size={32} color='#FFF' />
                    </button>
                  </Footer>
                </Product>
            )
          })}  
        </CarrocelContainer>
      </HomeContainer>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
      defaultPriceId: price.id
    }
  })


  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
}