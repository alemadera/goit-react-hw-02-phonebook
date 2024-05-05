import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;

  input {
    padding: 10px;
    font-size: 14px;
    width: 280px;
  }

  button {
    padding: 10px 20px;
    width: 150px;
    font-size: 14px;
    background-color: #008080;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 30px;
  }

  button:hover {
    background-color: #005353;
  }
`;

export const List = styled.ul`

  padding: 0;

  li {
    padding: 8px;
    font-size: 14px;

    // &:last-child {
    //   border-bottom: none;
    // }
  }
  button {
    padding: 6px 14px;
    font-size: 12px;
    background-color: #008080;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 10px;
    margin-top: 10px;
  }

  button:hover {
    background-color: #005353;
  }
`;

