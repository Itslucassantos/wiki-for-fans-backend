import prismaClient from "../../../prisma";
import { NameMovieOrTvShow } from "../../../types/tvShowAndMovie.types";

class SearchMovieService {
  async execute(req: NameMovieOrTvShow) {
    const movie = await prismaClient.movie.findFirst({
      where: {
        title: req.name,
      },
      include: {
        characters: true,
      },
    });

    if (!movie) {
      return null;
    }

    return {
      ...movie,
      genres: movie.genres as Array<{ id: number; name: string }>,
      productionCompanies: movie.productionCompanies as Array<{
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }>,
      productionCountries: movie.productionCountries as Array<{
        iso_3166_1: string;
        name: string;
      }>,
      spokenLanguages: movie.spokenLanguages as Array<{
        english_name: string;
        iso_639_1: string;
        name: string;
      }>,
    };
  }
}

export { SearchMovieService };
