import { Router } from "express";
import { TvShowController } from "./controllers/tvshow/TvShowController";
import { MovieController } from "./controllers/movie/MovieController";

const router = Router();

router.post("/tvshow", new TvShowController().handle);
router.post("/movie", new MovieController().handle);

export { router };
