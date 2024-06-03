/*
  Warnings:

  - You are about to drop the column `uuid` on the `Refer` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Refer_uuid_key";

-- AlterTable
ALTER TABLE "Refer" DROP COLUMN "uuid",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Refer_pkey" PRIMARY KEY ("id");
