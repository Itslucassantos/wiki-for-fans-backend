import api from "../../http/api";
import { IdMovieOrTvShow } from "../../types/tvShowAndMovie.types";

class SearchCharactersTmdbService {
  private readonly tmdbApiKey = process.env.TMDB_API_KEY;

  async execute({ id }: IdMovieOrTvShow) {
    const searchForCharacters = await api.get(`/tv/${id}/credits`, {
      params: { api_key: this.tmdbApiKey, language: "en-US" },
    });

    return searchForCharacters.data.cast;
  }
}

export { SearchCharactersTmdbService };
