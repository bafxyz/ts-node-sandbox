import gql from 'graphql-tag'
import React from 'react'
import { useMutation } from 'react-apollo-hooks'

export const Mutations = () => {
    const increment = useMutation(gql`
        mutation Increment {
            increment @client
        }
    `)

    const setCount = useMutation(gql`
        mutation SetCount($count: Int!) {
            setCount(count: $count) @client
        }
    `)

    return (
        <div>
            <h1>Mutations</h1>

            <button onClick={() => increment()}>increment</button>

            <button
                onClick={() =>
                    setCount({
                        variables: {
                            count: 12
                        }
                    })
                }
            >
                set count resolver
            </button>
        </div>
    )
}
