import prismaClient from "../../../prisma";
import { TvShowRequest } from "../../../types/tvshow.types";

class SearchTvShowService {
  async execute(req: TvShowRequest) {
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
