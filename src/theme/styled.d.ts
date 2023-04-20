import 'styled-components';

import { type ThemeType } from './ThemeProvider';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/ban-types
  export type DefaultTheme = {} & ThemeType
}
