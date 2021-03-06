import styled from 'styled-components';

const AlbumThumbnail = styled.div`
  padding: 2rem;
  height: 25rem;
  width: 100%;
  border: 1px solid #928f8a;
  background-image: url(${props => props.cover_photo.source});
  background-color: #141414;
  opacity: 0.7;
  background-size: cover;
  background-position: center center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.5);
  transition: ease 0.25s;

  &:hover {
    transition: ease 0.25s;
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.8);
    opacity: 0.5;
  }
`;

export default AlbumThumbnail;
