import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
return <Wrapper>
  <Label for='{label}'>{label}</Label>
    <IconWrapper>
      <Icon id={icon} size='16'/>
    </IconWrapper>
    <Input id='{label}' type='text' placeholder={placeholder}/>
</Wrapper>;
};

const Wrapper = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.25;
  position: relative;
`;

const Label = styled.label`
  display: none;
`;

const IconWrapper = styled.span`
  color: ${COLORS.gray500};
  position: absolute;
  margin: auto 0;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 3px;
  height: min-content;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${COLORS.black};
  color: ${COLORS.gray700};
  font-weight: bold;
  font-size: inherit;
  line-height: inherit;
  padding: 8px 2px 7px 36px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
    font-size: inherit;
    line-height: inherit;
  }
`;


export default IconInput;
