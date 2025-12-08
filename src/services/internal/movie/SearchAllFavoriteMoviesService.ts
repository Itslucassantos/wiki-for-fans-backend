import prismaClient from "../../../prisma";

class SearchAllFavoriteMoviesService {
  async execute() {
    const movies = await prismaClient.movie.findMany({
      where: {
        favorite: true,
      },
    });

    return movies;
  }
}

export { SearchAllFavoriteMoviesService };
