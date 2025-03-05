/*
  Warnings:

  - You are about to drop the `_CarDeparmentfk` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CarDeparmentfk" DROP CONSTRAINT "_CarDeparmentfk_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarDeparmentfk" DROP CONSTRAINT "_CarDeparmentfk_B_fkey";

-- DropTable
DROP TABLE "_CarDeparmentfk";

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
