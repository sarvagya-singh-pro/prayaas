-- CreateTable
CREATE TABLE "Refer" (
    "uuid" TEXT NOT NULL,
    "ip" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Refer_uuid_key" ON "Refer"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Refer_ip_key" ON "Refer"("ip");
