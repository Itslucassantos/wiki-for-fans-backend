import { Request, Response } from "express";
import { SearchMovieByIdService } from "../../services/internal/movie/SearchMovieByIdService";

class SearchMovieByIdController {
  async handle(req: Request, res: Response) {
    const id = Number(req.query.id);

    const searchMovieByIdService = new SearchMovieByIdService();
    const movie = await searchMovieByIdService.execute({ id });

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.json(movie);
  }
}

export { SearchMovieByIdController };
