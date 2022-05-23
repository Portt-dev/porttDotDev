import { objectType, extendType, nonNull, intArg } from 'nexus'
import { getBook, createBook } from '../../../resolvers'
export const Book = objectType({
  name: 'Book',            
  definition(t) {
    t.int('id')            
    t.string('title')     
    t.string('author')      
  },
})

export const BookMutation = extendType({
  type: 'Mutation',
  definition(t) {
    // create the field
    t.field('createBook', {
      // return type
      type: nonNull('Book'),
      // resolver
      resolve(_root, _args) {
        return createBook()
    },
    })
  }
 })

export const BookQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('getBook', {
        args: {                                        
            id: nonNull(intArg()),                               
        },
        type: nonNull('Book'),
        resolve(_root, _args) {
            return getBook(_args)
        },
    })
  },
})