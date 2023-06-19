import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Text,
} from "react-native";

interface KeyProps {
  value: string;
  index: number;
  onButtonPress: (text: string, index: number) => void;
}
export const Key = (props: KeyProps) => {
  const { onButtonPress, index, value } = props;
  const onPress = (e) => {
    // optimise with useCallback
    onButtonPress && onButtonPress(value, index);
  };
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
    >
      <View style={STYLES.otpInputBox}>
        <Text>{value}</Text>
      </View>
    </TouchableHighlight>
  );
};

const STYLES = StyleSheet.create({
  otpInputBox: {
    height: 48,
    width: 48,
    backgroundColor: '#DDDDDD',
    borderWidth: .5,
    margin: 4,
    alignItems:'center',
    justifyContent:'center',
    padding: 4,
  },
});
