import styled from "styled-components";

export const Button = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  margin: 0;
  margin-right: 1rem;
  color: black;
`;

export const FlagButton = styled.button`
  width: 16px;
  height: 16px;
  padding: 0;
  border: 0;
  background: transparent;
  margin: 0;
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
  width: 76px;
`;

export const CardNumber = styled.div`
  display: grid;
  grid-template-columns: 57px 1fr;
  grid-gap: 20px;

  img {
    height: 41px;
  }
`;
export const Main = styled.main`
  display: grid;
  grid-template-columns: 600px 1fr;
  grid-gap: 4rem;
  align-items: center;

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
  max-width: 355px;
`;
