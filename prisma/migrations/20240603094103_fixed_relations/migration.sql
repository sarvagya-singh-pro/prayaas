/*
  Warnings:

  - Added the required column `fromId` to the `Refer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Refer" DROP CONSTRAINT "Refer_ip_fkey";

-- AlterTable
ALTER TABLE "Refer" ADD COLUMN     "fromId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Refer" ADD CONSTRAINT "Refer_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
