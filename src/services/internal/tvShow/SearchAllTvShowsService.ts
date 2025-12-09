import prismaClient from "../../../prisma";

class SearchAllTvShowsService {
  async execute() {
    const tvShows = await prismaClient.tvShow.findMany();

    return tvShows;
  }
}

export { SearchAllTvShowsService };
