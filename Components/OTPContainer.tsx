import { useState } from "react"
import { View, StyleSheet, TextInput } from "react-native"
import { OTPContainer } from "./OTPPlaceHolder"

interface OTPContainerProps {
    otpCount?: number
    onOTPFill?: (index:number)=>void
    otpMap: string[]
}
export const OTPStripContainer = (props: OTPContainerProps)=>{
    const {onOTPFill, otpMap=[]} = props
    const getOTPPlaceHolders = ()=>{
        return otpMap && otpMap.length && otpMap.map((otp, index)=>{
            return <OTPContainer value={otp!=='-'?otp:''} index={index} onTextChange={(text, index)=>{
                console.log(text, index)
            }} key={otp+index}/>
        })
    }
    return <View style={STYLES.otpContainer}>
       {getOTPPlaceHolders()}
    </View>
}

const STYLES = StyleSheet.create({
    otpContainer:{
        flexDirection:'row',
        justifyContent: 'center',
    },
})