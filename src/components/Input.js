import React, { useState } from "react";
import uniqueId from "lodash/uniqueId";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    color: #737373;
  }

  input:focus + label,
  input:valid + label {
    display: none;
  }

  ${props =>
    !props.empty &&
    css`
      input:invalid + label {
        display: none;
      }
    `}

  input {
    margin: 0;
  }
`;

export default ({ type = "text", label, ...props }) => {
  const [id] = useState(() => uniqueId("checkout-"));
  const [value, setValue] = useState("");
  return (
    <Wrapper empty={Boolean(!value)}>
      <input
        onChange={e => setValue(e.target.value)}
        required
        type={type}
        id={id}
        className="full"
      />
      <label htmlFor={id}>{label}</label>
    </Wrapper>
  );
};
