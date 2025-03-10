/*
  Warnings:

  - You are about to drop the column `country` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `region_id` on the `Departments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Departments" DROP COLUMN "country",
DROP COLUMN "region_id";
