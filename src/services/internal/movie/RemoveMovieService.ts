import prismaClient from "../../../prisma";
import { IdMovieOrTvShow } from "../../../types/tvShowAndMovie.types";

class RemoveMovieService {
  async execute({ id }: IdMovieOrTvShow) {
    const movie = await prismaClient.movie.delete({
      where: {
        id,
      },
    });

    return movie;
  }
}

export { RemoveMovieService };
