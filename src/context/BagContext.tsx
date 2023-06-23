import { createContext, ReactNode, useState } from "react";

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  amount?: 0
  defaultPriceId: string
}

interface BagContextType {
  bagProducts: ProductProps[]
  addProductToBag: (product: ProductProps) => void
  removeProductFromBag: (id: string) => void
}

interface BagContextProviderProps {
  children: ReactNode
}

export const BagContext = createContext({} as BagContextType)

export function BagContextProvider({ children }: BagContextProviderProps) {
  const [bagProducts, setBagProducts] = useState<ProductProps[]>([])

  function addProductToBag(product: ProductProps) {
    const isProductAlreadyInBag = bagProducts.find(p => p.id === product.id)

    if (!isProductAlreadyInBag) {
      setBagProducts(state => [...state, product])
    }
  }

  function removeProductFromBag(id: string) {
    const newBagProducts = bagProducts.filter(product => {
      return product.id !== id
    })
    setBagProducts(newBagProducts)
  }

  return (
    <BagContext.Provider 
      value={{ 
        bagProducts,
        addProductToBag,
        removeProductFromBag
      }}>
      {children}
    </BagContext.Provider>
  )
} 