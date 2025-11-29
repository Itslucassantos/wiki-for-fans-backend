import api from "../../http/api";
import { MovieProps } from "../../types/movie.types";
import { IdMovieOrTvShow } from "../../types/tvShowAndMovie.types";
import { ImageUrlBuilder } from "../../utils/ImageUrlBuilder";

class SearchMovieDetailsTmdbService {
  private readonly tmdbApiKey = process.env.TMDB_API_KEY;

  async execute({ id }: IdMovieOrTvShow): Promise<MovieProps> {
    const movieDetailsResponse = await api.get(`/movie/${id}`, {
      params: { api_key: this.tmdbApiKey, language: "en-US" },
    });

    const movieDetails = movieDetailsResponse.data;

    return {
      id: movieDetails.id,
      imdbId: Number(movieDetails.imdb_id),
      backdropPath: ImageUrlBuilder.build(movieDetails.backdrop_path),
      posterPath: ImageUrlBuilder.build(movieDetails.poster_path),
      originCountry: movieDetails.origin_country,
      originalLanguage: movieDetails.original_language,
      originalTitle: movieDetails.original_title,
      overview: movieDetails.overview,
      popularity: movieDetails.popularity,
      releaseDate: movieDetails.release_date,
      revenue: movieDetails.revenue,
      status: movieDetails.status,
      tagline: movieDetails.tagline,
      title: movieDetails.title,
      voteAverage: movieDetails.vote_average,
      voteCount: movieDetails.vote_count,
      genres: movieDetails.genres.map((g) => ({
        id: g.id,
        name: g.name,
      })),
      productionCompanies: movieDetails.production_companies.map((c) => ({
        id: c.id,
        logo_path: ImageUrlBuilder.build(c.logo_path),
        name: c.name,
        origin_country: c.origin_country,
      })),
      productionCountries: movieDetails.production_countries.map((pc) => ({
        iso_3166_1: pc.iso_3166_1,
        name: pc.name,
      })),
      spokenLanguages: movieDetails.spoken_languages.map((s) => ({
        english_name: s.english_name,
        iso_639_1: s.iso_639_1,
        name: s.name,
      })),
    };
  }
}

export { SearchMovieDetailsTmdbService };
