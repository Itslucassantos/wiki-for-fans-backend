import { Request, Response } from "express";
import { SearchAllMoviesService } from "../../services/internal/movie/SearchAllMoviesService";

class SearchAllMoviesController {
  async handle(_: Request, res: Response) {
    const searchAllMoviesService = new SearchAllMoviesService();
    const movies = await searchAllMoviesService.execute();

    return res.json(movies);
  }
}

export { SearchAllMoviesController };
