import prismaClient from "../../../prisma";
import { SaveFavoriteMovieOrTvShowRequest } from "../../../types/tvShowAndMovie.types";

class SaveFavoriteTvShowService {
  async execute({ id, favorite }: SaveFavoriteMovieOrTvShowRequest) {
    const tvShow = await prismaClient.tvShow.update({
      where: {
        id,
      },
      data: {
        favorite,
      },
    });

    return tvShow;
  }
}

export { SaveFavoriteTvShowService };
