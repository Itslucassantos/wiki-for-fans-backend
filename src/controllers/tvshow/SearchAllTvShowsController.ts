import { Request, Response } from "express";
import { SearchAllTvShowsService } from "../../services/internal/tvShow/SearchAllTvShowsService";

class SearchAllTvShowsController {
  async handle(_: Request, res: Response) {
    const searchAllTvShowsService = new SearchAllTvShowsService();
    const tvShows = await searchAllTvShowsService.execute();

    return res.json(tvShows);
  }
}

export { SearchAllTvShowsController };
