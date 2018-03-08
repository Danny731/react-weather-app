import styled from 'styled-components';

export const Background = styled.div`
  background: linear-gradient(to bottom right, #ff9966, #f05053);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
`

export const Header = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f05053;
  height: 80px;
  padding: 1rem;
`

export const SearchField = styled.input`
  background: #f05053;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  border: none;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-radius: 1rem;
    box-shadow: 0 2px 8px 2px rgba(0,0,0,0.25); 
  }
  &::placeholder {
    color: #225560;
    font-size: 1rem;
  }
`

export const Button = styled.button`
  padding: 0.7rem 1.5rem;
  margin-top: 1rem;
  background: #EDF060;
  border-radius: 0.3rem;
  border: none;
  color: #000;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1.2rem;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`





