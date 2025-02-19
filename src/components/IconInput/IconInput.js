import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const ICON_SIZES = {
  small: 10.67,
  large: 16,
};


const STYLE_SIZES = {
  small: {
    "--text": "14px",
    "--underline": "1px"
  },
  large: {
    "--text": "18px",
    "--underline": "2px"
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLE_SIZES[size];

  return <Wrapper style={styles}>
    <Label for={label}>{label}</Label>
      <IconWrapper>
        <Icon id={icon} size={ICON_SIZES[size]}/>
      </IconWrapper>
      <Input id={label} width={width} type='text' placeholder={placeholder}/>
  </Wrapper>;
};

const Wrapper = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: var(--text);
  line-height: 1.17;
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

  ${Wrapper}:hover > & {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: 0;
  border-bottom: var(--underline) solid ${COLORS.black};
  color: ${COLORS.gray700};
  font-weight: bold;
  font-size: inherit;
  line-height: inherit;
  outline-offset: 2px;
  padding: 8px 2px 7px 36px;
  width: ${ (props) => props.width + 'px' };

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
    font-size: inherit;
    line-height: inherit;
  }
`;

export default IconInput;
