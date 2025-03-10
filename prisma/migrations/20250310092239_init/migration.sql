-- CreateTable
CREATE TABLE "reg_district" (
    "id" TEXT NOT NULL,
    "regencyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "reg_district_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reg_provinces" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "reg_provinces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reg_regencies" (
    "id" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "reg_regencies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reg_district" ADD CONSTRAINT "reg_district_regencyId_fkey" FOREIGN KEY ("regencyId") REFERENCES "reg_regencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reg_regencies" ADD CONSTRAINT "reg_regencies_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "reg_provinces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
