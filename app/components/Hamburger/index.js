/**
 *
 * Hamburger
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
// import { Flex, Box } from 'rebass';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';

const MobileBar = styled.div`
  background-color: #141414;
  width: 100vw;
  height: 5rem;
`;

const MenuStyled = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 2.25rem;
    height: 1.875rem;
    right: 1.65rem;
    top: 1.55rem;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 36px;
    width: 36px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #fff;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #141414;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    padding-top: 10rem;
    color: #b8b7ad;
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  /* Individual item */
  .bm-item {
    display: flex;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(20, 20, 20);
  }
  .hidden {
    height: 0;
    width: 0;
    overflow: hidden;
    position: absolute;
  }

  .link {
    outline: none;
    text-decoration: none;
    position: relative;
    font-size: 3em;
    line-height: 1;
    color: #9e9ba4;
    display: inline-block;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .link--kukuri {
    text-transform: uppercase;
    font-weight: 900;
    overflow: hidden;
    line-height: 0.75;
    color: #b2b0a9;

    &:hover {
      color: #b2b0a9;
    }
    &::after {
      content: '';
      position: absolute;
      height: 16px;
      width: 100%;
      top: 50%;
      margin-top: -8px;
      right: 0;
      background: #ffe7ae;
      transform: translate3d(-100%, 0, 0);
      transition: transform 0.4s;
      transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
    &:hover::after {
      transform: translate3d(100%, 0, 0);
    }
    &::before {
      content: attr(data-letters);
      position: absolute;
      z-index: 2;
      overflow: hidden;
      color: #fff;
      white-space: nowrap;
      width: 0%;
      transition: width 0.4s 0.3s;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;

const MenuStyledButton = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  padding-bottom: 5rem;
`;

const Hamburger = props => {
  const onClickRedirect = () => {
    props.redirect('/');
  };

  return (
    <MobileBar>
      <MenuStyled>
        <Menu width="100%">
          <MenuStyledButton {...props} onClick={onClickRedirect}>
            <Logo height="3.5rem" width="3.5rem" />
          </MenuStyledButton>

          <a href="/" data-letters="Home" className="link link--kukuri">
            Home
          </a>
          <a href="/about" data-letters="About" className="link link--kukuri">
            About
          </a>
          <a
            href="/gallery"
            data-letters="Gallery"
            className="link link--kukuri"
          >
            Gallery
          </a>
          <a
            href="/contact"
            data-letters="Contact"
            className="link link--kukuri"
          >
            Contact
          </a>
        </Menu>
      </MenuStyled>
    </MobileBar>
  );
};

Hamburger.propTypes = { redirect: PropTypes.func.isRequired };

export default Hamburger;
