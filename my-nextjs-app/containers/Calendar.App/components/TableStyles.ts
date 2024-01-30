import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(
      90deg,
      blueviolet 0%,
      tomato 100%
    );
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    font-family: 'Arial', sans-serif;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2938b9;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 6px;
  }
}

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  overflow-y: auto;
  width: 90vw;
  height: 95vh;
  margin: 0 auto;
  position: relative;
  border-bottom: 1px solid #fff;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  width: 12rem;
  height: 6rem;
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StickyTh = styled(Th)`
  position: sticky;
  width: 10rem;
  height: 6rem;
  top: 0;
  z-index: 2;
`;

export const StickyTd = styled(Td)`
  position: sticky;
  width: 10rem;
  height: 6rem;
  left: 0;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

export const Button = styled.button`
  width: 60px;
  height: 40px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2980b9;
  }
`;

export const TextContainer = styled.p`
  span {
    font-weight: bold;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justifyContent: center;
  alignItems: center;
  height: 100vh;
`;