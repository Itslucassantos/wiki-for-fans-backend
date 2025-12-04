-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "tv_shows" ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false;
