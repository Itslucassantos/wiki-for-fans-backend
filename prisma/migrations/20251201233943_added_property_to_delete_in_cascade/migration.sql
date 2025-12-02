-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_movie_id_fkey";

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
