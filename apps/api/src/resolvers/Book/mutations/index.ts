import { database } from "../../../graphql/database"

export const createBook = async () => {
    const data = await database.prisma.book.create({
        data: {
            title: "the greatest book title OF ALL TIME",
            author: "the best author of all time"
        },
    })
    return {
        ...data
    }
}

