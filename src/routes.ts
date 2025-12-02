import { Router } from "express";
import { TvShowController } from "./controllers/tvshow/TvShowController";
import { MovieController } from "./controllers/movie/MovieController";
import { RemoveMovieController } from "./controllers/movie/RemoveMovieController";
import { RemoveTvShowController } from "./controllers/tvshow/RemoveTvShowController";

const router = Router();

router.post("/tvshow", new TvShowController().handle);
router.delete("/tvshow/remove", new RemoveTvShowController().handle);

router.post("/movie", new MovieController().handle);
router.delete("/movie/remove", new RemoveMovieController().handle);

export { router };
