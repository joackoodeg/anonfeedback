-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "stars" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "Proyects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Proyects_pkey" PRIMARY KEY ("id")
);
