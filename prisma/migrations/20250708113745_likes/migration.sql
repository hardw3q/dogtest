-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "file" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Dog" ("file", "id") SELECT "file", "id" FROM "Dog";
DROP TABLE "Dog";
ALTER TABLE "new_Dog" RENAME TO "Dog";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
