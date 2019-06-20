import React from 'react'
import { DirectQuery } from './components/DirectQuery'
import { DirectWrite } from './components/DirectWrite'
import { Mutations } from './components/Mutations'
import { Queries } from './components/Queries'
import { Todos } from './components/Todos'
import { Variables } from './components/Variables'

function App() {
    return (
        <>
            <DirectWrite />
            <Mutations />
            <DirectQuery />
            <Queries />
            <Variables />
            <Todos />
        </>
    )
}

export default App
