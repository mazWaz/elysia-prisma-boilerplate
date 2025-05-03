// seed.ts

import { PrismaClient } from "@prisma/client";
import { readFile } from 'fs/promises';

const prisma = new PrismaClient()

async function main() {
    // --- Seed Provinces (Conditional) ---
    const provinceCount = await prisma.reg_provinces.count();
    if (provinceCount === 0) {
        console.log("Seeding provinces from SQL...");
        const sql = await readFile('prisma/province.sql', 'utf-8');
        const queries = sql.split(';').filter(q => q.trim());
        for (const query of queries) {
            if (query) await prisma.$executeRawUnsafe(query);
        }
        console.log("Provinces seeded.");
    } else {
        console.log("Provinces already exist, skipping province SQL execution.");
    }

    // --- Seed Departments (Idempotent Check) ---
    const departmentId = '01JT0B0R75G7A2MFM9YCJCM9JT';
    const existingDepartment = await prisma.departments.findUnique({ where: { id: departmentId } });
    if (!existingDepartment) {
         console.log(`Creating department ID: ${departmentId}...`);
        await prisma.departments.create({ data: { 
            id: '01JT0B0R75G7A2MFM9YCJCM9JT',
            name: "POLDA METRO JAYA",
            address: "Jl. Jaksa Agung Suprapto No 12",
            category: "POLDA",
            province: "11",
            district: "1101",
            subDistrict: "110101" } });
         console.log("Department created.");
    } else {
        console.log(`Department ID: ${departmentId} already exists.`);
    }

    // Seed multiple cars using an array pattern
const carsToSeed = [
    {
        id: '01JT0B0R75G7A2MFM9YCJC8BLT',
        name: 'Mitsubishi Lancer Evo X', 
        brand: 'Mitsubishi', 
        release_year: 2009, 
        plate_number: `N116A`, 
        status: 'Active',
        departmentId: '01JT0B0R75G7A2MFM9YCJCM9JT'
    },
    // New user entry
    {
        id: '01JT0B0R75G7A2MFM9YCJ82KQI',
            name: 'Porche Cayman 911', 
            brand: 'Porsche', 
            release_year: 2009, 
            plate_number: `N1116A`, 
            status: 'Active',
            departmentId: '01JT0B0R75G7A2MFM9YCJCM9JT'
    }
  ];
  
  for (const carData of carsToSeed) {
    const existingUser = await prisma.cars.findUnique({ 
      where: { plate_number: carData.plate_number } 
    });
  
    if (!existingUser) {
      console.log(`Creating user: ${carData.plate_number}...`);
      await prisma.cars.create({
        data: {
          ...carData,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      console.log(`Car with plate : ${carData.plate_number} created.`);
    } else {
      console.log(`Car with plate : ${carData.plate_number} already exists.`);
    }
  }

    // --- Seed Roles (Idempotent Check - ALWAYS RUNS) ---
    // Define the roles you need. Match IDs if your SQL relied on implicit IDs (1, 2, 3, 4)
    const rolesToSeed = [
        { id: 1, name: 'SUPERADMIN', description: 'Have full access through whole system' },
        { id: 2, name: 'ADMIN', description: 'Have a lot of access through whole system' },
        { id: 3, name: 'STAFF', description: 'Have partial access through whole system' },
        { id: 4, name: 'USER', description: 'Have limited access through whole system' },
    ];

    console.log("Checking/Seeding roles...");
    for (const roleData of rolesToSeed) {
        const existingRole = await prisma.roles.findUnique({ // Use your actual role model name
            where: { id: roleData.id }
        });
        if (!existingRole) {
            console.log(`Creating role: ${roleData.name} (ID: ${roleData.id})...`);
            await prisma.roles.create({ // Use your actual role model name
                data: {
                    id: roleData.id,
                    name: roleData.name,
                    description: roleData.description
                    // Add other fields like createdAt/updatedAt if not handled automatically
                }
            });
        } else {
             console.log(`Role: ${roleData.name} (ID: ${roleData.id}) already exists.`);
        }
    }
     console.log("Role check/seeding finished.");

    // Seed multiple users using an array pattern
const usersToSeed = [
    {
      id: "01JT30NFXNFRQ98HQDSTJ1E3RY", // Existing user ID
      email: "basil@macedonian.com",
      username: "basil",
      password: "$argon2id$v=19$m=5,t=5,p=1$FlFO+T7lh8iLyl6x0uShfozbQby+J0FeoJzNiAC3KS4$OztcnVFu6cyNn7cpi04WwjSaqfUz6IywIfKFgh0fsPk",
      roleId: 1,
      departmentId: departmentId // Make sure this is defined earlier
    },
    // New user entry
    {
      id: "01JTABCDEFGHIJKLMNOPQRSTUV", // New ULID
      email: "new.user@example.com",
      username: "new_user",
      password: "$argon2id$v=19$m=5,t=5,p=1$FlFO+T7lh8iLyl6x0uShfozbQby+J0FeoJzNiAC3KS4$OztcnVFu6cyNn7cpi04WwjSaqfUz6IywIfKFgh0fsPk", // Generate new hashed password
      roleId: 2, // Different role
      departmentId: departmentId 
    }
  ];
  
  for (const userData of usersToSeed) {
    const existingUser = await prisma.users.findUnique({ 
      where: { email: userData.email } 
    });
  
    if (!existingUser) {
      console.log(`Creating user: ${userData.email}...`);
      await prisma.users.create({
        data: {
          ...userData,
          isEmailVerified: true, // Or set based on user
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      console.log(`User ${userData.email} created.`);
    } else {
      console.log(`User ${userData.email} already exists.`);
    }
  }

    // --- Seed UserCar (Idempotent Check) ---
    const userCarId = '01JPVNHVZKFZMYNYSPJH2TFQ6D';
    const existingUserCar = await prisma.userCars.findUnique({ where: { id: userCarId } });
    if (!existingUserCar) {
         console.log(`Creating department ID: ${userCarId}...`);
        await prisma.userCars.create({ data: { 
            id: '01JPVNHVZKFZMYNYSPJH2TFQ6D',
            userId: '01JT30NFXNFRQ98HQDSTJ1E3RY',
            carId: '01JT0B0R75G7A2MFM9YCJC8BLT' } });
         console.log("User Cars created.");
    } else {
        console.log(`User Car ID: ${userCarId} already exists.`);
    }

    console.log("Seeding finished successfully.");
}

main() // ... (keep catch/finally)
    .catch(e => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });