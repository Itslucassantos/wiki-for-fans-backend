import prismaClient from "../../../prisma";
import { IdMovieOrTvShow } from "../../../types/tvShowAndMovie.types";

class RemoveTvShowService {
  async execute({ id }: IdMovieOrTvShow) {
    const tvShow = await prismaClient.tvShow.delete({
      where: {
        id,
      },
    });

    return tvShow;
  }
}

export { RemoveTvShowService };
