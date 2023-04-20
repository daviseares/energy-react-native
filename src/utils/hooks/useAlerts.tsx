import { StyleSheet, Text, View } from 'react-native';
import {
  type BaseToastProps,
  ErrorToast,
  SuccessToast,
  Toast
} from '~/modules';

type AlertActions = {
  showError: (message: string, description?: string) => void;
  showSuccess: (message: string, description?: string) => void;
  showBubble: (message: string) => void;
};

export function useAlerts (): AlertActions {
  return {
    showError: (message: string, description?: string): void => {
      Toast.show({
        text1: message,
        text2: description,
        type: 'error',
        topOffset: 60
      });
    },
    showSuccess: (message: string, description?: string): void => {
      Toast.show({
        text1: message,
        text2: description,
        type: 'success',
        topOffset: 60
      });
    },
    showBubble: (message: string, description?: string): void => {
      Toast.show({
        text1: message,
        text2: description,
        type: 'bubble',
        visibilityTime: 1000,
        topOffset: 60
      });
    }
  };
}

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props: BaseToastProps) => <SuccessToast {...props} />,
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: (props: BaseToastProps) => <ErrorToast {...props} />,
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
  bubble: ({ text1 }: BaseToastProps) => (
    <View style={styled.bubble}>
      <Text style={styled.text}>{text1}</Text>
    </View>
  )
};

const styled = StyleSheet.create({
  bubble: {
    height: 50,
    width: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  text: {
    color: '#000'
  }
});
