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
      <IconWrapper>
        <Icon id='chevron-down'/>
      </IconWrapper>
    </Wrapper>
  );
};

const IconWrapper = styled.span`
  position: absolute;
  margin: auto 0;
  pointer-events: none;
  right: 16px;
  top: 9px;
`;

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
  position: relative;
  white-space: nowrap;

  &:hover {
    color: ${ COLORS.black };
  }
`;

const InvisibleSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: 2px solid transparent;
  color: inherit;
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 10px 54px 10px 14px;
  outline: none;
  width: min-content;

  &:focus {
    border-color: ${ COLORS.primary };
  }
`;

export default Select;
