import {database} from '../../../graphql/database'
export const getBook = async (args: any) => {
  const {id} = args
  const data = await database.prisma.book.findUnique({
    where: {
      id: id,
    },
  })

  return {
    ...data,
  }
}
