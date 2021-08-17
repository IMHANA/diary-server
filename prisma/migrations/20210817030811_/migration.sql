/*
  Warnings:

  - You are about to drop the `Diary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shared` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Diary" DROP CONSTRAINT "Diary_user_no_fkey";

-- DropForeignKey
ALTER TABLE "Shared" DROP CONSTRAINT "Shared_diary_no_fkey";

-- DropForeignKey
ALTER TABLE "Shared" DROP CONSTRAINT "Shared_shared_user_no_fkey";

-- DropTable
DROP TABLE "Diary";

-- DropTable
DROP TABLE "Shared";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "user_no" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,

    PRIMARY KEY ("user_no")
);

-- CreateTable
CREATE TABLE "diary" (
    "diary_no" SERIAL NOT NULL,
    "title_list" TEXT[],
    "user_no" INTEGER NOT NULL,
    "painting" TEXT NOT NULL,
    "text_field" TEXT NOT NULL,
    "sticker" INTEGER NOT NULL DEFAULT 1,
    "diary_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("diary_no")
);

-- CreateTable
CREATE TABLE "shared" (
    "diary_no" INTEGER NOT NULL,
    "shared_user_no" INTEGER NOT NULL,
    "shared_state" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user.user_id_unique" ON "user"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "shared.diary_no_unique" ON "shared"("diary_no");

-- AddForeignKey
ALTER TABLE "diary" ADD FOREIGN KEY ("user_no") REFERENCES "user"("user_no") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shared" ADD FOREIGN KEY ("diary_no") REFERENCES "diary"("diary_no") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shared" ADD FOREIGN KEY ("shared_user_no") REFERENCES "user"("user_no") ON DELETE CASCADE ON UPDATE CASCADE;
