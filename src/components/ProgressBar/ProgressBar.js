import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Wrapper
    role="progressbar"
    aria-valuenow="{value}"
    aria-valuemin="0"
    aria-valuemax="100">
    <VisuallyHidden>{value} %</VisuallyHidden>
  </Wrapper>;
};

const Wrapper = styled.div`
  padding: 0;
  background-color: ${ COLORS.transparentGray15 };
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 ${ COLORS.transparentGray35 } inset;
  height: 12px;
`;

export default ProgressBar;
