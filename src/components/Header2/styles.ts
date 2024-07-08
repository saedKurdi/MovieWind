import styled from "styled-components";

const Header2Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
  background-color: #383c4c;
`;

const Header2Logo = styled.h3`
  font-size: 30px;
  color: #387cf4;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
`;

const Header2LinksSearch = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Header2Link = styled.p`
  color: white;
  font-size: 18px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
`;

const Header2Search = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #10142c;
  border: 0;
  color: white;
`;

const Header2Button = styled.button`
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 25px;
  color: white;
  background-color: #387cf4;
  border: 0;
  padding: 10px 30px;
  cursor: pointer;
`;

export {
  Header2Container,
  Header2Logo,
  Header2LinksSearch,
  Header2Link,
  Header2Search,
  Header2Button,
};
