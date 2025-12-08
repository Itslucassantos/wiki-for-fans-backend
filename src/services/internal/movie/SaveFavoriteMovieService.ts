import prismaClient from "../../../prisma";
import { SaveFavoriteMovieOrTvShowRequest } from "../../../types/tvShowAndMovie.types";

class SaveFavoriteMovieService {
  async execute({ id, favorite }: SaveFavoriteMovieOrTvShowRequest) {
    const movie = await prismaClient.movie.update({
      where: { id },
      data: { favorite },
    });

    return movie;
  }
}

export { SaveFavoriteMovieService };
