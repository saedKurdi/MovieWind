import styled from "styled-components";

const ActorList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  gap: 25px;
`;

const Actor = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ActorImage = styled.img`
  border-radius: 9px;
  height: 300px;
  width: 250px;
`;

const ActorNameAndRole = styled.p`
  font-size: 22px;
  height: 50px;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export { ActorList, Actor, ActorImage, ActorNameAndRole };
