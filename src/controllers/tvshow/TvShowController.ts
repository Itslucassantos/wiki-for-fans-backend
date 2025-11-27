import { Request, Response } from "express";
import { TvShowService } from "../../services/tvshow/TvShowService";

class TvShowController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const tvShowService = new TvShowService();

    const tvShow = await tvShowService.execute({ name });

    return res.json(tvShow);
  }
}

export { TvShowController };
