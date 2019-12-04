import React, { useState } from "react";
import uniqueId from "lodash/uniqueId";
import styled, { css } from "styled-components";

const topLabel = css`
  font-size: 11px;
  transform: translateY(-30px) translateX(10px);
`;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(20px);
    color: #737373;
    transition: all 200ms ease;
  }

  input:focus + label,
  input:valid + label {
    ${topLabel}
  }

  ${props =>
    !props.empty &&
    css`
      input:invalid + label {
        ${topLabel}
      }
    `}

  input {
    margin: 0;
  }
`;

export default ({ onChange, type = "text", label, ...props }) => {
  const [id] = useState(() => uniqueId("checkout-"));
  const [value, setValue] = useState("");
  return (
    <Wrapper empty={Boolean(!value)}>
      <input
        onChange={e => {
          setValue(e.target.value);
          if (onChange) onChange(e);
        }}
        required
        type={type}
        id={id}
        name={id}
        className="full"
      />
      <label htmlFor={id}>{label}</label>
    </Wrapper>
  );
};
