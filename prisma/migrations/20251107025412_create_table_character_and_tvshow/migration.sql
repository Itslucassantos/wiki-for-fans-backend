-- CreateTable
CREATE TABLE "tv_shows" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "poster_image" TEXT,
    "backdrop_image" TEXT,
    "first_air_date" TEXT NOT NULL,
    "vote_average" DOUBLE PRECISION NOT NULL,
    "vote_count" INTEGER NOT NULL,
    "number_of_seasons" INTEGER NOT NULL,
    "number_of_episodes" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "genres" JSONB NOT NULL,
    "characters_count" INTEGER NOT NULL,

    CONSTRAINT "tv_shows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "tv_show_id" TEXT NOT NULL,
    "character_name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "episode_count" INTEGER NOT NULL,
    "actor_id" INTEGER NOT NULL,
    "actor_name" TEXT NOT NULL,
    "actor_biography" TEXT NOT NULL DEFAULT '',
    "actor_birthday" TEXT,
    "actor_deathday" TEXT,
    "actor_age" INTEGER,
    "actor_place_of_birth" TEXT,
    "actor_profile_image" TEXT,
    "actor_popularity" DOUBLE PRECISION NOT NULL,
    "actor_gender" TEXT NOT NULL,
    "actor_known_for" TEXT NOT NULL,
    "actor_also_known_as" TEXT[],
    "actor_homepage" TEXT,
    "actor_imdb_id" TEXT NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_tv_show_id_fkey" FOREIGN KEY ("tv_show_id") REFERENCES "tv_shows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
