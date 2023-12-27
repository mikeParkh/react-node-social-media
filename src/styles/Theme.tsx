import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

type ThemeProps = {
  children: ReactNode
}

const baseTheme = {
  background: '#fff',
  color: '#222',
}

const darkTheme = {
  background: '#222',
  color: '#fff',
}

const themes = {
  base: baseTheme,
  dark: darkTheme
}

const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={themes.base}>{children}</ThemeProvider>
)

export default Theme;
