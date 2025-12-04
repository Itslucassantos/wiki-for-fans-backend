import { Request, Response } from "express";
import { SaveFavoriteMovieService } from "../../services/internal/movie/SaveFavoriteMovieService";

class SaveFavoriteMovieController {
  async handle(req: Request, res: Response) {
    const { id, favorite } = req.body;

    const saveFavoriteMovieService = new SaveFavoriteMovieService();
    const movie = await saveFavoriteMovieService.execute({ id, favorite });

    return res.json(movie);
  }
}

export { SaveFavoriteMovieController };
