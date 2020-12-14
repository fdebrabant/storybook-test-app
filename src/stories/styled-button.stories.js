import React from 'react';
import { action } from '@storybook/addon-actions';
import StyledButton from '../components/styled-button';

export default {
  title: 'Material-Components/Styled Button',
};

export const Default = () => (
  <StyledButton onClick={action('Styled button clicked')}>
    Styled Button
  </StyledButton>
);