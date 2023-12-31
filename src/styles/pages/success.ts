import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',
  height: 656,

  img: {
    
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',	
    fontWeight: 'bold',
    textDecoration: 'none',

    color: '$green500',
    
    '&:hover': {
      color: '$green300',
    }
  },
})

export const ImagesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '6.5rem auto 3rem',

})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 140,
  maxHeightheight: 140,
  
  borderRadius: '50%',
  
  boxShadow: '0 0 60px rgba(0, 0, 0, 0.8)', 
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  
  '&:not(:first-child)': {
    marginLeft: '-3rem',
  },

  img: {
    objectFit: 'cover',
  }
})