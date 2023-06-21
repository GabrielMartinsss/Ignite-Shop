import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  placeContent: 'center',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
  height: '85vh',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.5rem)',
  
  padding: '0.25rem',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover',
  },
})

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    padding: '1.25rem',
    border: 0,
    borderRadius: 8,
    
    fontWeight: 'bold',
    fontSize: '$md',

    color: '$white',
    backgroundColor: '$green500',
    cursor: 'pointer',

    transition: 'all 0.2s',
    
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      filter: 'brightness(0.85)',
    },
  }
})

export const ProductLoading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',

  div: {
    span: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: '1rem',
      height: '1rem',
      margin: '1.5rem',
      background: '#007DB6',
      borderRadius: '50%',
      animation: 'loading 1s infinite alternate',
    },
  
    'span:nth-child(2)': {
      background: '#008FB2',
      animationDelay: '0.2s',
    },
  
    'span:nth-child(3)': {
      background: '#009B9E',
      animationDelay: '0.4s',
    },
  
    'span:nth-child(4)': {
      background: '#00A77D',
      animationDelay: '0.6s',
    },
  
    'span:nth-child(5)': {
      background: '#00B247',
      animationDelay: '0.8s',
    },
  
    'span:nth-child(6)': {
      background: '#5AB027',
      animationDelay: '1.0s',
    },
  
    'span:nth-child(7)': {
      background: '#A0B61E',
      animationDelay: '1.2s',
    },
  
    '@keyframes loading': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      }
    }
  }
})