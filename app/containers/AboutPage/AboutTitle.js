import styled from 'styled-components';

const AboutTitle = styled.div`
  font-size: 7rem;
  margin: 0;
  color: #fff;

  h1 {
    font-size: 7rem;
    margin: 0;
  }
  @media screen and (max-width: 80rem) {
    h1 {
      font-size: 6rem;
      color: red;
    }
  }
  @media screen and (max-width: 60rem) {
    h1 {
      font-size: 5rem;
      color: blue;
    }
  }
  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 4rem;
      color: green;
    }
  }
  @media screen and (max-width: 20rem) {
    h1 {
      font-size: 3rem;
      color: yellow;
    }
  }
`;

export default AboutTitle;
