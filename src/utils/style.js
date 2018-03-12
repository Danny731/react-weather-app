import styled from 'styled-components';

export const Background = styled.div`
  background: linear-gradient(to bottom right, #FFEB55, #FFE314);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-template-rows: auto 1fr;
`

export const Header = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 1rem;
`

export const InputSearch = styled.input`
  background: transparent;
  padding: 0.8rem 0.2rem 0.2rem 0.2rem;
  font-size: 1.2rem;
  
  border: none;
  &:focus {
    outline: none;
    color: #000;
  }
  &::placeholder {
    color: #333;
    font-size: 1rem;
  }
`

export const Button = styled.button`
  padding: 0.7rem 1.5rem;
  margin-top: 2rem;
  background: transparent;
  border-radius: 0.2rem;
  border: 2px solid #000;
  color: #000;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1.2rem;
  &:active {
    background: rgb(4, 219, 147);
  }
`

export const Container = styled.section`
  background: #000;
  grid-column: 1 / -1;
`

export const InnerContainer = styled.div`
display: grid;
padding: 40px;
`




