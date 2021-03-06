import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0);
  text-align: left;
  max-width: 45%;
  height: 80%;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.5);
  transition: ease 0.25s;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 0.125rem;
  border: 1px solid #928f8a;

  @media (max-width: 750px) {
    width: 300px;
    height: 100%;
    max-width: 100%;
  }

  &:hover {
    transition: ease 0.25s;
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.8);
    opacity: 0.5;
  }

  h1,
  h2,
  h3 {
    color: #fff;
  }
  p {
    color: #a5a5a5;
  }
`;

export default CardWrapper;

// display: flex;
//   justify-content: flex-end;
//   align-items: flex-start;
//   flex-direction: column;
//   padding: 2rem;
//   height: 25rem;
//   width: 100%;

//   border: 1px solid #928f8a;
//   background-image: url(${props => props.cover_photo.source});
//   background-size: cover;
//   background-position: center center;
//   margin: 1rem;
