import prismaClient from "../../../prisma";
import { IdMovieOrTvShow } from "../../../types/tvShowAndMovie.types";

class SearchMovieByIdService {
  async execute({ id }: IdMovieOrTvShow) {
    const movie = await prismaClient.movie.findUnique({
      where: { id },
      include: {
        characters: true,
      },
    });

    return movie;
  }
}

export { SearchMovieByIdService };
