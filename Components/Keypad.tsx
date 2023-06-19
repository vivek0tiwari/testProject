import { useState } from "react"
import { View, StyleSheet, TextInput } from "react-native"
import {Key} from './Key'

interface KeyPadProps {
    keys: string[]
    onKeyPress?: (value:string,index:number)=>void
}
export const Keypad = (props: KeyPadProps)=>{
    const {keys, onKeyPress} = props
    
    const renderKeys = ()=>{
        return keys.length && keys.map((key, index)=>{
            if(key){
                return <Key key={key} value={key} index={index} onButtonPress={onKeyPress}/>
            }
            return null
       })
    }
    return <View style={STYLES.otpContainer}>
       {renderKeys()}
    </View>
}

const STYLES = StyleSheet.create({
    otpContainer:{
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:'center'
    },
})