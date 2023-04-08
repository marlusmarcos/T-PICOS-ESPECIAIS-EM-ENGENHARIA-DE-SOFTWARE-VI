import { createContext, Dispatch } from "react"

type TotalContextType = {
    total: number
    setTotal: Dispatch<number>
}

export const TotalContext = createContext<TotalContextType> ({
    total: 0,
    setTotal: v => {}
})
