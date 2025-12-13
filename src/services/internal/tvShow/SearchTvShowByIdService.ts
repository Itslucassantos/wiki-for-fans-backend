import prismaClient from "../../../prisma";
import { IdMovieOrTvShow } from "../../../types/tvShowAndMovie.types";

class SearchTvShowByIdService {
  async execute({ id }: IdMovieOrTvShow) {
    const tvShow = await prismaClient.tvShow.findUnique({
      where: { id },
      include: {
        characters: true,
      },
    });

    return tvShow;
  }
}

export { SearchTvShowByIdService };
