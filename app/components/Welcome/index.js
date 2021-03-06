import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import H3 from 'components/H3';
import { Flex, Box } from 'rebass';
import H1 from '../H1';
import messages from './messages';
import WelcomeTitle from './WelcomeTitle';
import WelcomeDescription from './WelcomeDescription';
import WelcomeLocation from './WelcomeLocation';

import Vr from './vr';
import Wrapper from './Wrapper';

const BiographyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
`;

function Welcome() {
  return (
    <Wrapper>
      <Flex flexWrap="wrap">
        <Box width={{ xs: 1 / 12 }} />
        <Box width={{ xs: 10 / 12 }}>
          <WelcomeTitle>
            <H1>Welcome</H1>
          </WelcomeTitle>
        </Box>
        <Box width={{ xs: 1 / 12 }} />

        <Flex width={1} py="2rem">
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 2 / 12, lg: 1 / 12 }}>
            <Vr />
          </Box>
          <Box width={{ xs: 8 / 12, lg: 8 / 12 }}>
            <BiographyWrapper>
              <WelcomeLocation>
                <H2>The Honey Hive</H2>
                <H3>San Francisco, CA</H3>
              </WelcomeLocation>
              <WelcomeDescription>
                <FormattedMessage {...messages.description} />
              </WelcomeDescription>
            </BiographyWrapper>
          </Box>
          <Box width={{ xs: 1 / 12 }} />
          <Box width={{ xs: 1 / 12 }} />
        </Flex>
      </Flex>
    </Wrapper>
  );
}

Welcome.propTypes = {};

export default Welcome;
