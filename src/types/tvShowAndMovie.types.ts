export interface IdMovieOrTvShow {
  id: number;
}

export interface NameMovieOrTvShow {
  name: string;
}

export interface IdAndTypeMovieOrTvShow {
  id: number;
  type: "movie" | "tv";
}

export interface SaveFavoriteMovieOrTvShowRequest {
  id: number;
  favorite: boolean;
}
