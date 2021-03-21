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
return <div>
  <Label for="{label}">{label}</Label>
  <input id="{label}" type="text" placeholder={placeholder}></input>
</div>;
};

const Label = styled.label`
  display: none;
`;

export default IconInput;
