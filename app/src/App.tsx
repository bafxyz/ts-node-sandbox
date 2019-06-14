import React from 'react'
import { CountProvider, useCountState, useCountDispatch } from './count-context'

function CountDisplay() {
    const { count } = useCountState()
    return <div>{`The current count is ${count}`}</div>
}

function Counter() {
    const dispatch = useCountDispatch()

    return <button onClick={() => dispatch({ type: 'increment' })}>Increment count</button>
}

function App() {
    return (
        <CountProvider>
            <CountDisplay />
            <Counter />
        </CountProvider>
    )
}

export default App
