import gql from 'graphql-tag'
import { Graphql } from '../../types'

const resolvers: Graphql.Resolvers = {
    Mutation: {
        toggleTodoComplete: (parent, { id }, { cache, getCacheKey }) => {
            const cacheId = getCacheKey({ __typename: 'Todo', id })
            const fragment = gql`
                fragment completeTodo on Todo {
                    complete
                }
            `
            const todo = cache.readFragment<any>({ fragment, id: cacheId })
            cache.writeFragment({
                fragment,
                id: cacheId,
                data: {
                    ...todo,
                    complete: !todo.complete
                }
            })
            return null
        }
    },
    Query: {}
}

export default resolvers
