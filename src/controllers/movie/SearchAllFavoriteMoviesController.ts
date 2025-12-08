import { Request, Response } from "express";
import { SearchAllFavoriteMoviesService } from "../../services/internal/movie/SearchAllFavoriteMoviesService";

class SearchAllFavoriteMoviesController {
  async handle(_: Request, res: Response) {
    const searchAllFavoriteMoviesService = new SearchAllFavoriteMoviesService();
    const movies = await searchAllFavoriteMoviesService.execute();

    return res.json(movies);
  }
}

export { SearchAllFavoriteMoviesController };
