import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange}>
        {children}
      </InvisibleSelect>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  background-color: ${ COLORS.transparentGray15 };
  color: ${ COLORS.gray700 };
  border-radius: 8px;
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

const InvisibleSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  color: inherit;
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 12px 16px;
  outline: none;
  width: auto;
`;

export default Select;
