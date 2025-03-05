import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Seed initial roles
    await prisma.roles.createMany({
        data: [
            {
                name: 'SUPERADMIN',
                description: 'Full system access'
            },
            {
                name: 'ADMIN',
                description: 'Administrator Privileges'
            },
            {
                name: 'USER',
                description: 'Regular user'
            },
        ],
        skipDuplicates: true,
    });
}

main() 
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });