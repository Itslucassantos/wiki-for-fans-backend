/*
  Warnings:

  - You are about to drop the column `episode_count` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `characters_count` on the `tv_shows` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "characters" DROP COLUMN "episode_count",
DROP COLUMN "order";

-- AlterTable
ALTER TABLE "tv_shows" DROP COLUMN "characters_count";
