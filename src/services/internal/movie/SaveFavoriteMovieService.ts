import prismaClient from "../../../prisma";

interface SaveFavoriteMovieRequest {
  id: number;
  favorite: boolean;
}

class SaveFavoriteMovieService {
  async execute({ id, favorite }: SaveFavoriteMovieRequest) {
    const movie = await prismaClient.movie.update({
      where: { id },
      data: { favorite: favorite },
    });

    return movie;
  }
}

export { SaveFavoriteMovieService };
