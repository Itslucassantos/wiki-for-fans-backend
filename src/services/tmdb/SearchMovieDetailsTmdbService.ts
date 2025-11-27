import api from "../../http/api";
import { IdMovieOrTvShow } from "../../types/tvShowAndMovie.types";
import { ImageUrlBuilder } from "../../utils/ImageUrlBuilder";

interface MovieResult {
  id: number;
  imdb_id: number;
  backdrop_path: string;
  poster_path: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  revenue: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
  genres: Array<{ id: number; name: string }>;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
}

class SearchMovieDetailsTmdbService {
  private readonly tmdbApiKey = process.env.TMDB_API_KEY;

  async execute({ id }: IdMovieOrTvShow): Promise<MovieResult> {
    const movieDetailsResponse = await api.get<MovieResult>(`/movie/${id}`, {
      params: { api_key: this.tmdbApiKey, language: "en-US" },
    });

    const movieDetails = movieDetailsResponse.data;

    return {
      id: movieDetails.id,
      imdb_id: movieDetails.imdb_id,
      backdrop_path: ImageUrlBuilder.build(movieDetails.backdrop_path),
      poster_path: ImageUrlBuilder.build(movieDetails.poster_path),
      origin_country: movieDetails.origin_country,
      original_language: movieDetails.original_language,
      original_title: movieDetails.original_title,
      overview: movieDetails.overview,
      popularity: movieDetails.popularity,
      release_date: movieDetails.release_date,
      revenue: movieDetails.revenue,
      status: movieDetails.status,
      tagline: movieDetails.tagline,
      title: movieDetails.title,
      vote_average: movieDetails.vote_average,
      vote_count: movieDetails.vote_count,
      genres: movieDetails.genres.map((g) => ({
        id: g.id,
        name: g.name,
      })),
      production_companies: movieDetails.production_companies.map((c) => ({
        id: c.id,
        logo_path: ImageUrlBuilder.build(c.logo_path),
        name: c.name,
        origin_country: c.origin_country,
      })),
      production_countries: movieDetails.production_countries.map((pc) => ({
        iso_3166_1: pc.iso_3166_1,
        name: pc.name,
      })),
      spoken_languages: movieDetails.spoken_languages.map((s) => ({
        english_name: s.english_name,
        iso_639_1: s.iso_639_1,
        name: s.name,
      })),
    };
  }
}

export { SearchMovieDetailsTmdbService };
