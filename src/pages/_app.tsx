import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

import { BagContextProvider } from '@/context/BagContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BagContextProvider>
      
      <Component {...pageProps} />
    </BagContextProvider>
  )
}
