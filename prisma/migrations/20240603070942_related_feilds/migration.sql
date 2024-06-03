/*
  Warnings:

  - You are about to drop the column `referal` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "referal";

-- AddForeignKey
ALTER TABLE "Refer" ADD CONSTRAINT "Refer_ip_fkey" FOREIGN KEY ("ip") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
