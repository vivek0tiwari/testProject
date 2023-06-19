import { useState } from "react"
import { View, StyleSheet, TextInput } from "react-native"

interface OtpPlaceholderProp {
    value:string
    index: number
    onTextChange: (text:string, index: number)=>void
}
export const OTPContainer = (props: OtpPlaceholderProp)=>{
    const {onTextChange, index, value}= props
    return <TextInput defaultValue={value}  style={STYLES.otpInputBox} onChangeText={onTextChange}/>
}

const STYLES = StyleSheet.create({
    otpInputBox:{
        height:38,
        width:38, 
        borderColor:'black',
        borderWidth:2,
        marginHorizontal:4,
        padding:4
    }
})