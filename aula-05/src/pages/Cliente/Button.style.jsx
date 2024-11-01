import { styled } from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: green;

  &:hover {
    background-color: #57e157;
  }
`;

export const RedButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: red;
  &:hover {
    background-color: #7e3030;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => (props.active ? "#000B58" : "#003161")};
  color: ${(props) => (props.active ? "white" : "red")};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
`;
