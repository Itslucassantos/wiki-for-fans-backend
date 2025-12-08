import { Router } from "express";
import { TvShowController } from "./controllers/tvshow/TvShowController";
import { MovieController } from "./controllers/movie/MovieController";
import { RemoveMovieController } from "./controllers/movie/RemoveMovieController";
import { RemoveTvShowController } from "./controllers/tvshow/RemoveTvShowController";
import { SaveFavoriteMovieController } from "./controllers/movie/SaveFavoriteMovieController";
import { searchMovieById } from "./middlewares/movie/searchMovieById";
import { searchTvShowById } from "./middlewares/tvShow/searchTvShowById";
import { SaveFavoriteTvShowController } from "./controllers/tvshow/SaveFavoriteTvShowController";
import { SearchAllFavoritesTvShowController } from "./controllers/tvshow/SearchAllFavoritesTvShowController";
import { SearchAllFavoriteMoviesController } from "./controllers/movie/SearchAllFavoriteMoviesController";

const router = Router();

router.post("/tvshow", new TvShowController().handle);
router.post(
  "/tvshow/favorite",
  searchTvShowById,
  new SaveFavoriteTvShowController().handle
);
router.delete(
  "/tvshow/remove",
  searchTvShowById,
  new RemoveTvShowController().handle
);
router.get(
  "/tvshow/searchAllFavorites",
  new SearchAllFavoritesTvShowController().handle
);

router.post("/movie", new MovieController().handle);
router.post(
  "/movie/favorite",
  searchMovieById,
  new SaveFavoriteMovieController().handle
);
router.delete(
  "/movie/remove",
  searchMovieById,
  new RemoveMovieController().handle
);
router.get(
  "/movie/searchAllFavorites",
  new SearchAllFavoriteMoviesController().handle
);

export { router };
