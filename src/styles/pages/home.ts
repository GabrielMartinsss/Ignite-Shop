import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '85vh',
})

export const CarrocelContainer = styled('div', {
  display: 'flex',
  marginLeft: 'auto',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
})

export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  overflow: 'hidden',
  borderRadius: 8,
  // padding: '0.25rem',
  
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  cursor: 'pointer',

  a: {
    outline: 'none',
    boxShadow: 'none',
  },

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})

export const Footer = styled('footer', {
  display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    padding: '2rem',
    borderRadius: 6,
    backgroundColor: 'rgba(32, 32, 36, 0.9)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',

      strong: {
        fontSize: '$lg',
        color: '$gray100'
      },
  
      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
      },
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      padding: '0.75rem',
      border: 0,
      borderRadius: 6,
      background: '$green500',
      
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      
      '&:hover': {
        filter: 'brightness(1.1)',
      }
    }

})