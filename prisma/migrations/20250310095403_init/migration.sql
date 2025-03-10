/*
  Warnings:

  - You are about to drop the `reg_district` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reg_district" DROP CONSTRAINT "reg_district_regencyId_fkey";

-- DropTable
DROP TABLE "reg_district";

-- CreateTable
CREATE TABLE "reg_districts" (
    "id" TEXT NOT NULL,
    "regencyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "reg_districts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reg_districts" ADD CONSTRAINT "reg_districts_regencyId_fkey" FOREIGN KEY ("regencyId") REFERENCES "reg_regencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
