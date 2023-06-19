import { logoData } from "./gameData"

export const getOTPPlaceHolder = (i)=>{
    return logoData[i].name.split('').map((v)=>{
         return '-'
     })
 }

 export const getKeypadValues = ()=>{
    const allAlphabets = logoData && logoData.length && logoData.reduce((pv, cu, index)=>{
        return pv.concat(cu.name)
    },'')
    const set = new Set(allAlphabets.split('').sort((a,b)=>a>b))
    return Array.from(set); 
 }
 export const getValidOTPForStage = (stageIndex)=>{
    return logoData[stageIndex].name
 }

 export const getLogo = (i)=>{
    return logoData[i].imgUrl
 }