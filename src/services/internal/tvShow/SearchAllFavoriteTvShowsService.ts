import prismaClient from "../../../prisma";

class SearchAllFavoriteTvShowsService {
  async execute() {
    const tvShows = await prismaClient.tvShow.findMany({
      where: {
        favorite: true,
      },
    });

    return tvShows;
  }
}

export { SearchAllFavoriteTvShowsService };
