import * as React from 'react'

interface State {
    count: number
}
interface Action {
    type: 'increment' | 'decrement'
}
interface CountProviderProps {
    children: React.ReactNode
}

type Dispatch = (action: Action) => void

const CountStateContext = React.createContext<State | undefined>(undefined)
const CountDispatchContext = React.createContext<Dispatch | undefined>(undefined)

function countReducer({ count }: State, { type }: Action) {
    switch (type) {
        case 'increment': {
            return { count: count + 1 }
        }
        case 'decrement': {
            return { count: count - 1 }
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

function CountProvider({ children }: CountProviderProps) {
    const [state, setCount] = React.useReducer(countReducer, { count: 0 })

    return (
        <CountStateContext.Provider value={state}>
            <CountDispatchContext.Provider value={setCount}>{children}</CountDispatchContext.Provider>
        </CountStateContext.Provider>
    )
}

function useCountState() {
    const context = React.useContext(CountStateContext)

    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }

    return context
}

function useCountDispatch() {
    const context = React.useContext(CountDispatchContext)

    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }

    return context
}

export { CountProvider, useCountState, useCountDispatch }
