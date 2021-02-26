import styled from 'styled-components';
import { shade } from 'polished';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #707070;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #9466FF;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #9126FA;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }

    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#9466FF')};
    }
  }
`;
