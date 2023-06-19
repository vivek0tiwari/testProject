import { useCallback, useContext, useEffect } from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { ScoreContext } from '../App';

export default function Score(props) {
    const {navigation} = props
    const { score, setScore,setGameStage } = useContext(ScoreContext);
    useEffect(
        () =>{
          const usub = navigation.addListener('beforeRemove', (e) => {
            // Prevent default behavior of leaving the screen
            // e.preventDefault();
            setScore(0)
            setGameStage(0)
            navigation.dispatch(e.data.action)
          })
          return ()=> usub.remove()
        },
        [navigation]
      );
    
    
  return (
    <View style={styles.container}>
      <Text>{`Total Score:${score}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
