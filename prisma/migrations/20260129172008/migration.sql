/*
  Warnings:

  - You are about to drop the `Proyects` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `proyectId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "proyectId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Proyects";

-- CreateTable
CREATE TABLE "Proyect" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Proyect_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_proyectId_fkey" FOREIGN KEY ("proyectId") REFERENCES "Proyect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
