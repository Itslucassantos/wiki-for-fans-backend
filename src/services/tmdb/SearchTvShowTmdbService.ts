import api from "../../http/api";
import { NameMovieOrTvShow } from "../../types/tvShowAndMovie.types";

class SearchTvShowTmdbService {
  private readonly tmdbApiKey = process.env.TMDB_API_KEY;

  async execute({ name }: NameMovieOrTvShow) {
    const searchTvShow = await api.get("/search/tv", {
      params: { api_key: this.tmdbApiKey, query: name, language: "en-US" },
    });

    const searchTvShowResults = searchTvShow.data.results;

    if (!searchTvShowResults.length) return null;

    return searchTvShowResults[0];
  }
}

export { SearchTvShowTmdbService };
