import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../Components/Logo';
import { OTPStripContainer } from '../Components/OTPContainer';
import { Keypad } from '../Components/Keypad';
import {logoData} from '../gameData'
import {useGame} from '../hooks/gameHooks'
import { getKeypadValues, getLogo, getOTPPlaceHolder, getValidOTPForStage } from '../gameUtils';
import { ScoreContext } from '../App';


export default function Game(props) {
const {navigation} = props
const { score, setScore, currentGameStage , setGameStage} = useContext(ScoreContext);
 const [gameSate, updateGameState] = useGame()
 const [otpText,setOTPText ] = useState(getOTPPlaceHolder(currentGameStage))
 const [otpCursor,setOtpCursor ] = useState(0)
 
 

 const getGameOTP = (index)=>{
    const _i = logoData && logoData.length && logoData.find((logo, _index)=>_index===index)
    return _i
 }

 

 const startNextStage = () =>{
    if(logoData.length-1>currentGameStage) setGameStage((oldGameIndex)=>{
        setOtpCursor(0)  
        setOTPText(getOTPPlaceHolder(oldGameIndex+1))    
        return oldGameIndex+1
    })
 }


 const isGameWon = ()=>{
    const validOTP = getValidOTPForStage(currentGameStage)
    if(validOTP.toLocaleLowerCase() === otpText.join('').toLocaleLowerCase() ) return true
    return false
 }
 const isStageFinished = ()=>{
    return otpText.findIndex((otp)=>(otp==='-'))===-1?true:false
 }

const navigateToScore = ()=>{
  navigation.navigate('Score')
}

useEffect(() => {
  
  const unsubscribe = navigation.addListener('focus', () => {
    setOTPText(getOTPPlaceHolder(0))
    setOtpCursor(0)
});

return unsubscribe;
}, [navigation, setOTPText]);
useEffect(()=>{
    let gameWon = false
    if(isStageFinished() && currentGameStage <= logoData.length-1){
        if(isGameWon()){
            gameWon=true
            setScore(score+2)
        }
        updateGameState(otpText.join(''), gameWon)
        startNextStage()
        setScore(score-1)
        if(currentGameStage === logoData.length-1){
          navigateToScore()
        }
    }

 }, [otpText])


 const onKeyPress = (value, index) =>{
    console.log(otpText, value)
    const newOTPText = otpText.map((item, index)=>{
        if(index === otpCursor){
            return value
        }
        return item
    })
    setOTPText(newOTPText)
    setOtpCursor((ov)=>ov+1)
 }
  return (
    <View style={styles.container}>
        <View>
            <Logo url={getLogo(currentGameStage)} style={styles.logo}/>
        </View>
        <View>
            <OTPStripContainer  otpMap={otpText}/>
        </View>
        <View style={styles.keypad}>
            <Keypad onKeyPress={onKeyPress} keys={getKeypadValues()}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-around',
    flex:1,
    alignItems:'center'
  },
  keypad:{
  },
  logo:{
    height:178,
    width:278,
    backgroundColor: 'red',
    borderRadius: 12
  }
});
