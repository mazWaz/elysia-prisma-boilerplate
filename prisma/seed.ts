import { PrismaClient } from "@prisma/client";
import { readFile } from 'fs/promises'

const prisma = new PrismaClient()

async function main() {
    const sql = await readFile('prisma/province.sql', 'utf-8')
    const queries = sql.split(';').filter(q => q.trim())

    for (const query of queries) {
        await prisma.$executeRawUnsafe(query)
    }
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })