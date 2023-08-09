import React from 'react';
import { Container as StyledContainer } from './styles';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
