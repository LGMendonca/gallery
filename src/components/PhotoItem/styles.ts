import styled from "styled-components";

export const Container = styled.div`
  background-color: #3D3F43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background-color: #E50000;
  width: 25px;
  border: 2px solid red;
  border-radius: 4px;
  color: #FFF;
  font-size: 15px;
  margin: 15px 0;
  transition: .3s;
  
  &:hover {
    cursor: pointer;
    filter: brightness(.8);
  }
`;