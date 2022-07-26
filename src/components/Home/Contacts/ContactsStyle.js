import styled from "styled-components";

export const Container = styled.div`
  height: 20vw;
  background-color: #d74680;

  h3 {
    text-align: center;
    padding-top: 5%;
    font-size: 2em;
    margin-left: 2%;
  }
`;

export const SubContainer = styled.div`
  img {
    width: 4vw;
    height: 4vw;
    margin-left: 1.5rem;
    margin-top: 3%;

    :hover {
      cursor: pointer;
      -webkit-transform: rotateZ(-30deg);
      -ms-transform: rotateZ(-30deg);
      transform: rotateZ(-30deg);
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
