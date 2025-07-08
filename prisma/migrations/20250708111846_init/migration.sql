-- CreateTable
CREATE TABLE "Dog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "file" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Dog_id_key" ON "Dog"("id");
