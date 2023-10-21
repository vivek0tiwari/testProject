// const Parent = (props) => {

//     const parentFunc = useCallBack(() => {
  
//     },[]);
    
//     return (
//       <View>
//         <ChildA propA={props.propA} parentFunc={parentFunc} />
//         <ChildB propB={props.propB} />
//       </View>
//     );
//   };
  
//   const ChildX = (props) => {
//     return <Text>{props.propsA}</Text>;
//   };
//   export const ChildA =  useMemo(ChildX)
  
//   const ChildY = (props) => {
//     return <Text>{props.propsB}</Text>;
//   };
//   export const ChildB =  useMemo(ChildY)

//   // More then 50 screens 
//   //Screen1->Screen2<->Screen3 -> create Session for 15 min 
//   // Screen4: Show timer

//   // Non function req. Optimise Renders 

//   // Modules 
//   Global Timer  modules
//     Functions 
//         Create session 
//             Create a variable to capture start point (current time)
//         Start Session 
//             Manage timer that will run increase timer value every second
//         Restart Sesion 
//             Reset  start point to current time  

 
//     Page Container representing page props / navigation
//         This Page will have route name based on that will decide what to do 
//             - create session    
//             - show timer 
//             - reset timer 

//     Redux as Global Store 
//         Store timer value in global store 
//         Attach each page to redux and subscribe to event that is updating timer 



//         Redux State 
//         {
//             timesRemaining: seconds  // 15*60
//         }
//         actions 
//             const decreaseTimers(newState){
//                 return {state}
//             }

// Global Singalton Class to startStop Timer


// const PageWithTimer = (children, navigation)=>{
//     focus = () ={

//     }
//     blur = ()=>{

//     }
//     <View>
//         <Timer remaingTimers={remaingTimers} />
//         {children}
//     </View>
// }

// native navigation
 

// <Screen3>
//     useEffcet(()=>{
//             // start timer 
//     },[])
// </Screen3>


// <Screen4>
// const remaingTimers = props




// return (
//     <PageWithTimer></PageWithTimer>
// )

// connect('timesRemaining')</Screen4>


// // 
// <Timer>
//  // show timer values 
// </Timer>

    


// Device emmiter 




  