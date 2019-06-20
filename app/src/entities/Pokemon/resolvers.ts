import { Graphql } from '../../types'
import { countQuery } from '../Counter/resolvers'

const resolvers: Graphql.Pokemon = {
    Query: {},
    Mutation: {},
    Pokemon: {
        isMaxHPOdd: parent => {
            return parent.maxHP! % 2 !== 0 //eslint-disable-line
        },
        isMaxHPDivisibleByCount: (parent, args, { cache }) => {
            const { count } = cache.readQuery<any>({
                query: countQuery
            })

            return parent.maxHP! % count === 0 //eslint-disable-line
        },
        randomPerson: async parent => {
            const response = await fetch(`https://randomuser.me/api?seed=${parent.maxHP}`)
            const json = await response.json()
            const [data] = json.results
            return {
                __typename: 'Person',
                ...data,
                name: {
                    __typename: 'Name',
                    ...data.name
                }
            }
        },
        isFavorite(parent) {
            return localStorage.getItem('favoritePokemon') === parent.name
        }
    }
}

export default resolvers
