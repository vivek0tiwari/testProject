import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Text,
} from "react-native";

interface ScoreProp {
  score: string;
  onScorePress?: () => void;
}
export const Key = (props: ScoreProp) => {
  const { score } = props;
  
  return (
    
      <View style={STYLES.scoreHeader}>
        <Text>{score}</Text>
      </View>
  );
};

const STYLES = StyleSheet.create({
    scoreHeader: {
    height: 48,
    width: 68,
    backgroundColor: '#DDDDDD',
    borderWidth: .5,
    margin: 4,
    alignItems:'center',
    justifyContent:'center',
    padding: 4,
    borderRadius:8,
  },
});
