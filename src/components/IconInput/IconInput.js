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
  <label for="{label}">{label}</label>
  <input id="{label}" type="text" placeholder={placeholder}></input>
</div>;
};

export default IconInput;
