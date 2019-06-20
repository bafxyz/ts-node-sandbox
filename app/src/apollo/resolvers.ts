import counter from '../entities/Counter/resolvers'
import pokemon from '../entities/Pokemon/resolvers'
import todo from '../entities/Todo/resolvers'
import user from '../entities/User/resolvers'
import { merge } from 'lodash-es'

export const resolvers: any = merge(counter, pokemon, todo, user)
