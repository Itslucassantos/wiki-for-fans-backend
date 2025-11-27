import { NameMovieOrTvShow } from "../../types/tvShowAndMovie.types";
import { SearchMovieDetailsTmdbService } from "../tmdb/SearchMovieDetailsTmdbService";
import { SearchMovieTmdbService } from "../tmdb/SearchMovieTmdbService";

class MovieService {
  private readonly searchMovieTmdbService = new SearchMovieTmdbService();
  private readonly searchMovieDetailsTmdbService =
    new SearchMovieDetailsTmdbService();

  async execute(request: NameMovieOrTvShow) {
    try {
      const { name } = request;

      const movie = await this.searchMovieTmdbService.execute({ name });

      if (!movie) {
        throw new Error(`Movie "${name}" not found on TMDB`);
      }

      const movieDetails = await this.searchMovieDetailsTmdbService.execute({
        id: movie.id,
      });

      console.log(movieDetails);
    } catch (error: any) {
      throw new Error("Failed to fetch movie: " + error.message);
    }
  }
}

export { MovieService };
