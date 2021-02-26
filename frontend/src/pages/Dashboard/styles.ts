import { shade } from 'polished';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 80px 0 80px 120px;
  flex-direction: column;
  width: 100%;

  button {
    font-weight: 600;
    border-radius: 16px;
    border: 0;
    background: #9466FF;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 8px 8px;
    }

    .icon {
      display: flex;
      padding: 8px 8px;
      background: #9126FA;
      border-radius: 0 16px 16px 0;
      margin: 0 auto;
    }

    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#9466FF')};
    }
  }
`;

export const UserActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin-top: 16px;
`;

export const InputsContainer = styled.div`
  display: flex;
`;


export const Icon = styled(FiSearch)`
  color: #9466FF;

  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#9466FF')};
  }
`;
export const Header = styled.div`
  h1 {
    color: #707070;
    font-size: 40px;
  }

  h2 {
    color: #A8A8B3;
    font-weight: 300;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 8px 8px;
  font-size: 16px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #9466FF;

    &::placeholder {
      color: #BFBFBF;
    }
  }
`;
export const FilterByTagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  input {
    position: absolute;
    width: 22px;
    height: 22px;

    border-radius: 50%;

    top: 50;
    left: 16px;

    cursor: pointer;
  }

  p {
    margin-left: 48px;
  }
`;

export const BookContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;

  margin-top: 24px;

  background-color: #fff;

  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  padding: 16px 16px;
  border-radius: 16px;

  > span p {
    cursor: pointer;
    color: #9466FF;
    
    transition: opacity 0.2s, text-decoration 0.2s;

    &:hover {
      text-decoration: underline;
      color: ${shade(0.4, '#9466FF')};
    }
  }
`;
export const Data = styled.div`
  > div:first-child {
    strong {
        font-size: 24px;
        color: #707070;
      }

      p {
        font-size: 16px;
        color: #BFBFBF;
      }
    margin-bottom: 24px;
  }

  span {
    font-size: 22px;
    color: #707070;
  }
`;

export const Tag = styled.div`
  display: flex;

  p {
    margin: 24px 8px 0 0;
    color: #9466FF;
    font-size: 22px;
    font-weight: 300;
    cursor: pointer;

    transition: opacity 0.2s, text-decoration 0.2s;

    &:hover {
      text-decoration: underline;
      color: ${shade(0.4, '#9466FF')};
    }
  }
`;

export const ConfirmModalContent = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin: 28px 0 28px 0;
    font-size: 20px;
    color: #707070;
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: space-around;

    button {
      font-weight: 600;
      border-radius: 16px;
      border: 0;
      background: #9466FF;
      color: #fff;
      margin: 0 24px 16px 24px;

      display: flex;
      flex-direction: row;
      align-items: center;

      .text {
        padding: 8px 8px;
      }

      .icon {
        display: flex;
        padding: 8px 8px;
        background: #9126FA;
        border-radius: 0 16px 16px 0;
        margin: 0 auto;
      }

      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#9466FF')};
      }
    }
  }
`;

