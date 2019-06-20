import React from 'react'
import { useApolloClient } from 'react-apollo-hooks'

// Use for simple writes
// writeData does not validate the shape of the data saved to the cache

export const DirectWrite = () => {
    const client = useApolloClient()
    return (
        <div>
            <h1>Direct Write</h1>
            <button onClick={() => client.writeData({ data: { count: 0 } })}>set count writeData</button>
        </div>
    )
}
