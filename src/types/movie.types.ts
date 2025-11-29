import { CharacterProps } from "./character.types";

export interface MovieProps {
  id: number;
  imdbId: number;
  backdropPath: string;
  posterPath: string;
  originCountry: string[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  releaseDate: string;
  revenue: number;
  status: string;
  tagline: string;
  title: string;
  voteAverage: number;
  voteCount: number;
  genres: Array<{ id: number; name: string }>;
  productionCompanies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  productionCountries: Array<{ iso_3166_1: string; name: string }>;
  spokenLanguages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
}

export interface MovieResponse {
  id: number;
  imdbId: number;
  backdropPath: string;
  posterPath: string;
  originCountry: string[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  releaseDate: string;
  revenue: number;
  status: string;
  tagline: string;
  title: string;
  voteAverage: number;
  voteCount: number;
  genres: Array<{ id: number; name: string }>;
  productionCompanies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  productionCountries: Array<{ iso_3166_1: string; name: string }>;
  spokenLanguages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  characters: CharacterProps[];
}
