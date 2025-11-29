import api from "../../http/api";
import { IdAndTypeMovieOrTvShow } from "../../types/tvShowAndMovie.types";

class SearchCharactersTmdbService {
  private readonly tmdbApiKey = process.env.TMDB_API_KEY;

  async execute({ id, type }: IdAndTypeMovieOrTvShow) {
    const searchForCharacters = await api.get(`/${type}/${id}/credits`, {
      params: { api_key: this.tmdbApiKey, language: "en-US" },
    });

    return searchForCharacters.data.cast;
  }
}

export { SearchCharactersTmdbService };
