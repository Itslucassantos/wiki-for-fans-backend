import prismaClient from "../../../prisma";

class SearchAllMoviesService {
  async execute() {
    const movies = await prismaClient.movie.findMany();

    return movies;
  }
}

export { SearchAllMoviesService };
