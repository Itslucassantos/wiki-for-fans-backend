import { Request, Response } from "express";
import { SearchTvShowByIdService } from "../../services/internal/tvShow/SearchTvShowByIdService";

class SearchTvShowByIdController {
  async handle(req: Request, res: Response) {
    const id = Number(req.query.id);

    const searchTvShowByIdService = new SearchTvShowByIdService();
    const tvShow = await searchTvShowByIdService.execute({ id });

    if (!tvShow) {
      return res.status(404).json({ error: "Tv Show not found" });
    }

    res.json(tvShow);
  }
}

export { SearchTvShowByIdController };
