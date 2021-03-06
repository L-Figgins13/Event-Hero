/* eslint-disable */
import React from 'react';
import ThemeProvider from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  breakpoints: {
    xs: 0, // zero represents the default (for mobile-first approach),
    sm: '20rem',
    md: '40rem',
    lg: '60rem',
    xl: '80rem',
  },
  fonts: {
    sans: 'Muli, system-ui, sans-serif',
    mono: 'Muli, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    black: '#000',
    white: '#fff',
    primary: '#141414',
  },

  borders: {
    test: '1px solid red',
  },
};

export default theme;
