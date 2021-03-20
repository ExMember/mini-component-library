import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const generalRadius = (size) => {
  if (size == 'large'){
    return 8
  } else {
    return 4
  }
}

const rightRadius = (prop) => {
  const radius = prop.value - (100 - prop.maxRadius)

  if (radius <= 0) {
    return 0
  } else {
    return radius + 'px'
  }
}

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--radius": generalRadius('small') + "px",
    "--padding": 0,
  },
  medium: {
    "--height": 12 + "px",
    "--radius": generalRadius('medium') + "px",
    "--padding": 0,
  },
  large: {
    "--height": 24 + "px",
    "--radius": generalRadius('large') + "px",
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
    <Indicator value={value} maxRadius={ generalRadius(size) }/>
    <VisuallyHidden>{value} %</VisuallyHidden>
  </Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${ COLORS.transparentGray15 };
  border-radius: var(--radius);
  box-shadow: 0 1px 4px 0 ${ COLORS.transparentGray15 } inset;
  height: var(--height);
  overflow: hidden;
  padding: var(--padding);
`;

const Indicator = styled.div`
  background-color: ${ COLORS.primary };
  border-radius: inherit;
  border-top-right-radius: ${ prop => rightRadius(prop) };
  border-bottom-right-radius: ${ prop => rightRadius(prop) };
  height: 100%;
  width: ${props => props.value}%;
`;

export default ProgressBar;
