import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--radius": 4 + "px",
    "--padding": 0,
  },
  medium: {
    "--height": 12 + "px",
    "--radius": 4 + "px",
    "--padding": 0,
  },
  large: {
    "--height": 24 + "px",
    "--radius": 8 + "px",
    "--padding": 4 + "px",
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return <Wrapper
    role="progressbar"
    aria-valuenow="{value}"
    aria-valuemin="0"
    aria-valuemax="100"
    style={styles}>
    <Indicator value={value}/>
    <VisuallyHidden>{value} %</VisuallyHidden>
  </Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${ COLORS.transparentGray15 };
  border-radius: var(--radius);
  box-shadow: 0 1px 4px 0 ${ COLORS.transparentGray15 } inset;
  height: var(--height);
  padding: var(--padding);
`;

const Indicator = styled.div`
  background-color: ${ COLORS.primary };
  border-radius: inherit;
  height: 100%;
  width: ${props => props.value}%;
`;

export default ProgressBar;
