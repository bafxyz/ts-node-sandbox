import gql from 'graphql-tag'
import { Graphql } from '../../types'

const userTypeQuery = gql`
    query UserType {
        userType @client
    }
`

const resolvers: Graphql.Resolvers = {
    Query: {
        getUserType: (parent, args, { cache }) => {
            const { userType } = cache.readQuery<any>({
                query: userTypeQuery
            })

            return userType
        }
    },
    Mutation: {
        setUserType: (parent, { userType }, { cache }) => {
            cache.writeData({
                data: {
                    userType
                }
            })

            return null
        }
    }
}

export default resolvers
