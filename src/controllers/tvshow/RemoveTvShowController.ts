import { Request, Response } from "express";
import { RemoveTvShowService } from "../../services/internal/tvShow/RemoveTvShowService";

class RemoveTvShowController {
  async handle(req: Request, res: Response) {
    const id = Number(req.query.id);

    const removeTvShowService = new RemoveTvShowService();

    const tvShow = await removeTvShowService.execute({ id });

    return res.json(tvShow);
  }
}

export { RemoveTvShowController };
