import { Request, Response } from "express";
import { MovieService } from "../../services/movie/MovieService";

class MovieController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const movieService = new MovieService();

    const movie = await movieService.execute({ name });

    return res.json(movie);
  }
}

export { MovieController };
