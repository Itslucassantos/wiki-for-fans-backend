-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_tv_show_id_fkey";

-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "movie_id" INTEGER,
ALTER COLUMN "tv_show_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "movies" (
    "id" INTEGER NOT NULL,
    "imdb_id" INTEGER,
    "backdrop_path" TEXT,
    "poster_path" TEXT,
    "origin_country" TEXT[],
    "original_language" TEXT NOT NULL,
    "original_title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "release_date" TEXT NOT NULL,
    "revenue" INTEGER,
    "status" TEXT NOT NULL,
    "tagline" TEXT,
    "title" TEXT NOT NULL,
    "vote_average" DOUBLE PRECISION NOT NULL,
    "vote_count" INTEGER NOT NULL,
    "genres" JSONB NOT NULL,
    "production_companies" JSONB NOT NULL,
    "production_countries" JSONB NOT NULL,
    "spoken_languages" JSONB NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_tv_show_id_fkey" FOREIGN KEY ("tv_show_id") REFERENCES "tv_shows"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
