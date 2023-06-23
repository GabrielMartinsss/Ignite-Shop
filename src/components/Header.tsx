import Image from 'next/image'
import { Bag, HeaderContainer } from '@/styles/components/header'
import logoImg from '@/assets/logo.svg'
import { BagDetailsModal } from '@/components/BagDetailsModal'

import * as Dialog from '@radix-ui/react-dialog'

import { Handbag } from '@phosphor-icons/react'
import { useContext } from 'react'
import { BagContext } from '@/context/BagContext'
import Link from 'next/link'

export function Header() {
  const { bagProducts } = useContext(BagContext)
  const isExistProductsInBag = bagProducts.length > 0 ? true : false

  return (
    <Link href='/'>
      <HeaderContainer>
        <Image src={logoImg} alt=''/>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Bag>
              <Handbag size={24} color='#8D8D99' />
              {isExistProductsInBag ? <span>{bagProducts.length}</span> : ''}
            </Bag>
          </Dialog.Trigger>
            
          <BagDetailsModal />
        </Dialog.Root>    
      </HeaderContainer>
    </Link>
  )
}