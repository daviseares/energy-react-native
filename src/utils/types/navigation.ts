import type { Routes, Stacks } from '../enums';

export type PublickStackParams = {
  [Routes.SIGN_IN]: undefined;
  [Routes.SIGN_UP]: undefined;
};

export type PrivateStackParams = {
  [Stacks.APP_TABS]: undefined;
}

export type NavigationParams = Record<string, any>;
