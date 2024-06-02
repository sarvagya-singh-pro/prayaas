-- CreateTable
CREATE TABLE "User" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "referal" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");
