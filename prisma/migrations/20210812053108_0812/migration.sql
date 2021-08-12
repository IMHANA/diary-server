-- CreateTable
CREATE TABLE "User" (
    "user_no" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,

    PRIMARY KEY ("user_no")
);

-- CreateTable
CREATE TABLE "Diary" (
    "diary_no" SERIAL NOT NULL,
    "title_list" TEXT[],
    "user_no" INTEGER NOT NULL,
    "painting" TEXT NOT NULL,
    "text_field" TEXT NOT NULL,

    PRIMARY KEY ("diary_no")
);

-- CreateTable
CREATE TABLE "Shared" (
    "diary_no" INTEGER NOT NULL,
    "shared_user_no" INTEGER NOT NULL,
    "shared_state" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.user_id_unique" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Shared.diary_no_unique" ON "Shared"("diary_no");

-- AddForeignKey
ALTER TABLE "Diary" ADD FOREIGN KEY ("user_no") REFERENCES "User"("user_no") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shared" ADD FOREIGN KEY ("diary_no") REFERENCES "Diary"("diary_no") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shared" ADD FOREIGN KEY ("shared_user_no") REFERENCES "User"("user_no") ON DELETE CASCADE ON UPDATE CASCADE;
