import {
  CommonActions,
  type NavigationAction,
  type NavigationContainerRef,
  StackActions
} from '~/modules';
import { type NavigationParams } from '~/utils/types';

type RouteParams = Record<string, any>;

let navigator: NavigationContainerRef<NavigationParams>;

export function setTopLevelNavigator (
  navigatorRef: NavigationContainerRef<NavigationParams>
): void {
  navigator = navigatorRef;
}

export function dispatch (fn: NavigationAction): void {
  navigator.dispatch(fn);
}

export function resetRouteToTop (
  routeName: string,
  params?: Record<string, any>
): void {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params
        }
      ]
    })
  );
}

export function navigate (routeName: string, params?: RouteParams): void {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params
    })
  );
}

export function goBack (): void {
  navigator.dispatch(CommonActions.goBack());
}

export function popToTop (): void {
  navigator.dispatch(StackActions.popToTop());
}

export function pop (): void {
  navigator.dispatch(StackActions.pop());
}

export function push (name: string, params?: RouteParams): void {
  navigator.dispatch(StackActions.push(name, params));
}

export function replace (name: string, params?: RouteParams): void {
  navigator.dispatch(StackActions.replace(name, params));
}

export function getCurrentRoute (): string {
  if (navigator) {
    return navigator.getCurrentRoute()?.name ?? '';
  }
  return '';
}

export const NavigationActions = {
  navigate,
  goBack,
  popToTop,
  pop,
  push,
  replace,
  getCurrentRoute,
  resetRouteToTop
};
