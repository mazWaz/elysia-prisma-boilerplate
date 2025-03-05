/*
  Warnings:

  - You are about to drop the column `Country` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `District` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `Province` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `SubDistrict` on the `Departments` table. All the data in the column will be lost.
  - Added the required column `departmentId` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subDistrict` to the `Departments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cars" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Departments" DROP COLUMN "Country",
DROP COLUMN "District",
DROP COLUMN "Province",
DROP COLUMN "SubDistrict",
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "province" TEXT NOT NULL,
ADD COLUMN     "subDistrict" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_CarDeparmentfk" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CarDeparmentfk_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CarDeparmentfk_B_index" ON "_CarDeparmentfk"("B");

-- AddForeignKey
ALTER TABLE "_CarDeparmentfk" ADD CONSTRAINT "_CarDeparmentfk_A_fkey" FOREIGN KEY ("A") REFERENCES "Cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarDeparmentfk" ADD CONSTRAINT "_CarDeparmentfk_B_fkey" FOREIGN KEY ("B") REFERENCES "Departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
