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
  addProductToBag: ({id, name, imageUrl, price}: ProductProps) => void
}

interface BagContextProviderProps {
  children: ReactNode
}

export const BagContext = createContext({} as BagContextType)

export function BagContextProvider({ children }: BagContextProviderProps) {
  const [bagProducts, setBagProducts] = useState<ProductProps[]>([])

  function addProductToBag(product: ProductProps){
    setBagProducts(state => [...state, product])
    console.log(bagProducts)
  }
  return (
    <BagContext.Provider 
      value={{ 
        bagProducts,
        addProductToBag 
      }}>
      {children}
    </BagContext.Provider>
  )
} 