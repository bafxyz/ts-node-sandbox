import { createHttpLink } from 'apollo-link-http'
// import { RestLink } from 'apollo-link-rest'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { resolvers } from './resolvers'

// interface Transformers {
//     data: any
// }

// const restLink = new RestLink({
//     uri: 'https://graphql-pokemon.now.sh',
//     responseTransformer: async response => response.json().then(({ data }: Transformers) => data)
// })

const link = createHttpLink({ uri: 'https://graphql-pokemon.now.sh' })

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    resolvers
})

const initData = () =>
    client.writeData({
        data: {
            count: 2,
            todos: [
                {
                    __typename: 'Todo',
                    id: 1,
                    text: 'wash dishes',
                    complete: false
                }
            ]
        }
    })

initData()

// client.resetStore()
client.onResetStore(async () => {
    initData()
})
// client.clearStore()
client.onClearStore(async () => {
    initData()
})

export default client
