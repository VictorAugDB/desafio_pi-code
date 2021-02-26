import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 8px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input.is_description {
    height: 75px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #BFBFBF;

    &::placeholder {
      color: #BFBFBF;
    }
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: #9466FF;
    `}

  ${props =>
    props.isFilled &&
    css`
      input {
        color: #9466FF;
      }
    `}

  svg {
    margin-right: 16px;
  }
`;
