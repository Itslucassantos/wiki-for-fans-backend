import prismaClient from "../../../prisma";
import { NameMovieOrTvShow } from "../../../types/tvShowAndMovie.types";

class SearchTvShowService {
  async execute(req: NameMovieOrTvShow) {
    const tvshow = await prismaClient.tvShow.findFirst({
      where: {
        name: req.name,
      },
      include: {
        characters: true,
      },
    });

    if (!tvshow) {
      return null;
    }

    return {
      ...tvshow,
      genres: tvshow.genres as Array<{ id: number; name: string }>,
    };
  }
}

export { SearchTvShowService };
