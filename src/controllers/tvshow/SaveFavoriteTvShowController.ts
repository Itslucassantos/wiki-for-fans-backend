import { Request, Response } from "express";
import { SaveFavoriteTvShowService } from "../../services/internal/tvShow/SaveFavoriteTvShowService";

class SaveFavoriteTvShowController {
  async handle(req: Request, res: Response) {
    const { id, favorite } = req.body;

    const saveFavoriteTvShowService = new SaveFavoriteTvShowService();
    const tvShow = await saveFavoriteTvShowService.execute({ id, favorite });

    return res.json(tvShow);
  }
}

export { SaveFavoriteTvShowController };
