import { styled } from "..";

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const Bag = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  background: '$gray800',
  
  cursor: 'pointer',
  transition: 'all 0.2s',
  
  '&:hover': {
    background: '$gray700',
    svg: {
      fill: '$gray100',
    }
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '1.5rem',
    height: '1.5rem',

    position: 'absolute',
    top: '-0.4375rem',
    right: '-0.4375rem',
    border: '3px solid $gray900',
    borderRadius: '50%',

    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '$white',

    background: '$green500',

  }
})