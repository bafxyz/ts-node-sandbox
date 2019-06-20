import { MutationResolvers, QueryResolvers, PokemonResolvers } from '../generated/graphql'

export interface Resolvers {
    Query: QueryResolvers
    Mutation: MutationResolvers
}

export interface Pokemon extends Resolvers {
    Pokemon: PokemonResolvers
}
