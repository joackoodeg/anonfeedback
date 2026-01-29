/*
  Warnings:

  - You are about to drop the `Proyect` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_proyectId_fkey";

-- DropTable
DROP TABLE "Proyect";

-- CreateTable
CREATE TABLE "Proyects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Proyects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_proyectId_fkey" FOREIGN KEY ("proyectId") REFERENCES "Proyects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
