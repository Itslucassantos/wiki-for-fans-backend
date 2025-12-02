import { Request, Response } from "express";
import { RemoveMovieService } from "../../services/internal/movie/RemoveMovieService";

class RemoveMovieController {
  async handle(req: Request, res: Response) {
    const id = Number(req.query.id);

    const removeMovieService = new RemoveMovieService();

    const movie = await removeMovieService.execute({ id });

    return res.json(movie);
  }
}

export { RemoveMovieController };
