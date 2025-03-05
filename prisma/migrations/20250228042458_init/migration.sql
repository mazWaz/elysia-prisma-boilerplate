/*
  Warnings:

  - The primary key for the `Car` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('POLRI', 'POLDA', 'POLRES', 'POLSEK');

-- DropForeignKey
ALTER TABLE "UserCar" DROP CONSTRAINT "UserCar_carId_fkey";

-- AlterTable
ALTER TABLE "Car" DROP CONSTRAINT "Car_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Car_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Car_id_seq";

-- AlterTable
ALTER TABLE "UserCar" ALTER COLUMN "carId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "category" "Category" NOT NULL DEFAULT 'POLRES',
    "region_id" INTEGER NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserCar" ADD CONSTRAINT "UserCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
