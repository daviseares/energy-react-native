import React, { type FC, type PropsWithChildren } from 'react';
import { ThemeProvider, Toast } from '~/modules';
import colors from './colors';
import fontsVariant from './fonts';

const theme = { colors, fontsVariant };
export type ThemeType = typeof theme;

const ThemeProviderContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        <Toast />
      </>
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
