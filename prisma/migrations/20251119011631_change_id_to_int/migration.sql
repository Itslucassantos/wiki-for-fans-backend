/*
  Warnings:

  - The primary key for the `characters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tv_shows` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `characters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tv_show_id` on the `characters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `tv_shows` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_tv_show_id_fkey";

-- AlterTable
ALTER TABLE "characters" DROP CONSTRAINT "characters_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
DROP COLUMN "tv_show_id",
ADD COLUMN     "tv_show_id" INTEGER NOT NULL,
ADD CONSTRAINT "characters_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tv_shows" DROP CONSTRAINT "tv_shows_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "tv_shows_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_tv_show_id_fkey" FOREIGN KEY ("tv_show_id") REFERENCES "tv_shows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
