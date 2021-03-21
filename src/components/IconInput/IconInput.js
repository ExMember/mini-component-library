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
      <Icon id={icon}/>
    </IconWrapper>
    <Input id='{label}' type='text' placeholder={placeholder}>
    </Input>
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
  position: absolute;
  margin: auto 0;
  pointer-events: none;
  right: 16px;
  top: 9px;
`;

const Input = styled.input`
  color: ${COLORS.gray700};
  font-weight: bold;
  font-size: inherit;
  line-height: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
    font-size: inherit;
    line-height: inherit;
  }
`;


export default IconInput;
