import api from "../../http/api";
import { NameMovieOrTvShow } from "../../types/tvShowAndMovie.types";

class SearchMovieTmdbService {
  private readonly tmdbApiKey = process.env.TMDB_API_KEY;

  async execute({ name }: NameMovieOrTvShow) {
    const movie = await api.get("/search/movie", {
      params: {
        api_key: this.tmdbApiKey,
        query: name,
        language: "en-US",
      },
    });

    const movieResults = movie.data.results;

    if (!movieResults.length) return null;

    return movieResults[0];
  }
}

export { SearchMovieTmdbService };
