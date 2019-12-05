import styled from "styled-components";

export const Button = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  margin: 0;
  color: black;

  :hover {
    background: transparent;
  }
`;

export const FlagButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  background: transparent;
  margin: 0;

  :hover {
    background: transparent;
  }
`;

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 2rem;
  max-width: 80%;
  width: 1280px;

  h1 {
    margin: 0;
    padding: 0;
  }
`;

export const Countries = styled.ul`
  position: absolute;
  background: white;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 64px);
  grid-gap: 1rem;
`;
export const Main = styled.main`
  display: grid;
  grid-template-columns: 600px 1fr;
  grid-gap: 4rem;
  align-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  h1 {
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

export const Select = styled.select`
  height: 42px;
  border: 1px solid #595959;
  padding: 5.4px 6.3px;
  background: white;
  width: 100%;
`;
