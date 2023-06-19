import { createContext, FC, ReactNode, useState } from "react"


const SCORE_OFFSET = 2

// interface GameContextProps {
//     children: ReactNode
//     initialScore: number
// }
// interface Context{
//     score: number,
//     setGameScore: (number)=>void
// }
// export const GameContext = createContext<Context>({
//     score:0,
//     setGameScore:()=>undefined
// })

// export const GameContextProvider = (props: GameContextProps) => {
//     const {children, initialScore} = props
//     const [score, setScore] = useState<number>(initialScore)
    
//     return (<GameContext.Provider value={{ score, setGameScore:setScore}}>{children}</GameContext.Provider>)
// }




export const useGame = ():[{},(string,boolean)=>void]=>{
    const [gameState, setGameState] = useState<{}>({})  

    const updateGameState = (gameId, isSolved)=>{
        setGameState((oldGame)=>({...oldGame,[gameId]: isSolved}))
    }

    return [gameState, updateGameState,]
}