import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',

  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,

  width: '30rem',
  padding: '3rem',
  
  background: '$gray800',
  boxShadow: '4px 0 30px rgba(0, 0, 0, 0.8)',

  h2: {
    margin: '1.5rem 0 2rem',
    fontSize: '$lg',
    fontWeight: 'bold',

    color: '$gray100'
  },

  'button[type="submit"]': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '1.25rem 2rem',
    border: 0,
    borderRadius: 8,
    background: '$green500',

    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$white',

    cursor: 'pointer',
    transition: 'all 0.2s',

    '&:hover': {
      filter: 'brightness(0.85)',
    },
  }
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '2rem',
  right: '2rem',

  lineHeight: 0,
  border: 0,
  background: 'transparent',

  cursor: 'pointer',

})

export const ProductContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
})

export const Product = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  marginTop: '1.5rem',

  'div:first-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '6.25rem',
    height: '5.75rem',

    borderRadius: 8,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  },

  'div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.5rem',

    h3: {
      fontSize: '$md',
      fontWeight: '400',
      color: '$gray300',
    },

    strong: {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$gray100',
    },

    button: {
      display: 'flex',
      justifyContent: 'flex-start',

      width: 'fit-content',
      border: 0,
      background: 'transparent',

      fontWeight: 'bold',
      color: '$green500',
      
      
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      }
    }
  }
})

export const TotalContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  marginBottom: '3.5rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  'div:first-child': {
    'span:first-child': {
      color: '$gray100',
    },

    'span:last-child': {
      fontSize: '$md',
      color: '$gray300',
    }
  },

  'div:last-child': {
    'strong:first-child': {
      fontSize: '$md',
      color: '$gray100',
    },
    
    'strong:last-child': {
      fontSize: '$xl',
      color: '$gray100',
    },
  }
})
