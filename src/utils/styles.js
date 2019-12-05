import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  button {
    background: #FA8D0F;
    color: white;

    :hover {
      background: #eaa34f
    }
  }

  .App {
    width: 1280px;
    max-width: 80%;
    margin: auto;
    margin-bottom: 5rem;
  }

  img {max-width: 100%;}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  legend {
    font-size: 1.2rem;
    font-weight: bold;
  }

  input {
    margin-bottom: 1rem;
    :not(.full){

      margin-right: 1rem;
    }
      }

  .full {
    width: 100%;
  }

  fieldset {
    display: block;
  }

  .loading {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    display: flex;
    align-items: center;
  }
`;
