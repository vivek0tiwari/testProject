import { StatusBar } from 'expo-status-bar';
import {createContext, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {RedditPageContainer} from './RedditPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from'./Pages/Game'
import Score from './Pages/Score'
import {useGame} from './hooks/gameHooks'

const Stack = createNativeStackNavigator();
export const ScoreContext = createContext();
export default function App() {
  const [score, setScore] = useState(0) // this is not working since we have to use context in this case 
  const [currentGameStage, setGameStage] = useState(0)
  
  return (
    <ScoreContext.Provider value={{score, setScore, currentGameStage, setGameStage}}>
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="Game" component={Game} options={{
          headerTitle: (props) => <Text>{`GAME Level:${currentGameStage}`}</Text>,
          headerRight: () => (
            <Text>{score}</Text>
          ),
        }}/>
            <Stack.Screen name="Score" component={Score} />
    </Stack.Navigator>
    </NavigationContainer>
    </ScoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
