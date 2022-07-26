import styled from "styled-components";

export const Container = styled.div`
  background-color: #9047f5;
  height: 45vw;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const Title = styled.h2`
  color: white;
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;
`;
export const SubTitle = styled.h2``;

export const Name = styled.h1`
  font-family: "Lobster", sans-serif;
  color: #ffcb7d;
  font-size: 7vw;
`;
export const ContainerTitle = styled.div`
  padding-top: 10%;
  margin-left: 5%;
`;

export const Img = styled.img`
  width: 25vw;
  height: 23vw;
  border-radius: 50%;
  margin-top: 10%;

  :hover {
    transition: all 0.5s;
    cursor: pointer;

    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;
