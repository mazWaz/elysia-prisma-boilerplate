/*
  Warnings:

  - Added the required column `Country` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `District` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Province` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SubDistrict` to the `Departments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Departments" ADD COLUMN     "Country" TEXT NOT NULL,
ADD COLUMN     "District" TEXT NOT NULL,
ADD COLUMN     "Province" TEXT NOT NULL,
ADD COLUMN     "SubDistrict" TEXT NOT NULL;
