import { CloseButton, Content, Overlay, ProductContainer, Product, TotalContainer } from '@/styles/components/BagDetailsModal'
import * as Dialog from '@radix-ui/react-dialog'

import { X } from '@phosphor-icons/react'
import axios from 'axios'
import { useContext } from 'react'
import { BagContext } from '@/context/BagContext'
import Image from 'next/image'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export function BagDetailsModal() {
  const { bagProducts, removeProductFromBag } = useContext(BagContext)

  const prices = bagProducts.map(product => {
    let numberPrice = product.price.split(/\s/)
    return Number(numberPrice[1].replace(',','.'))
  })

  const totalPrice = prices.reduce((acc, item) => acc + item, 0)
  const totalPriceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice)

  async function handleBuyProduct() {
    try {
      const priceIdBagProduct = bagProducts.map((product) => {  
        return product['defaultPriceId']
      })
      const response = await axios.post('/api/checkout', {
        arrayOfPriceIds: priceIdBagProduct 
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl

    } catch (error) {
      alert('Falha ao redirecionar ao checkout!')
    } 
  }

  function handleRemoveProductFromBag(id: string) {
    removeProductFromBag(id)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        <CloseButton>
          <X size={24} color='#8D8D99'/>
        </CloseButton>

        <ProductContainer>
          {bagProducts.map(product => {
            return (
            <Product key={product.id}>
              <div>
                <Image src={product.imageUrl} width={95} height={95} alt='' />
              </div>
              <div>
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
                <button onClick={() => handleRemoveProductFromBag(product.id)}>Remover</button>
              </div>
            </Product>
            )
          })}
        </ProductContainer>

        <TotalContainer>
          <div>
            <span>Quantidade</span>
            <span>{bagProducts.length} itens</span>
          </div>
          <div>
            <strong>Valor total</strong>
            <strong>{totalPriceFormatted}</strong>
          </div>
        </TotalContainer>

        <button type='submit' onClick={handleBuyProduct} >Finalizar compra</button>
      </Content>
    </Dialog.Portal>
  )
}