import prismaClient from "../../../src/prisma";
import { SearchAllFavoriteMoviesService } from "../../../src/services/internal/movie/SearchAllFavoriteMoviesService";

jest.mock("../../../src/prisma");

describe("SearchAllFavoriteMoviesService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns all favorite movies", async () => {
    const movies = [{ title: "bloodsport" }, { title: "rocky balboa 1" }];
    (prismaClient.movie.findMany as jest.Mock).mockResolvedValue(movies);

    const service = new SearchAllFavoriteMoviesService();
    const results = await service.execute();

    expect(results).toEqual(movies);
    expect(prismaClient.movie.findMany).toHaveBeenCalledWith({
      where: {
        favorite: true,
      },
    });
    expect(prismaClient.movie.findMany).toHaveBeenCalledTimes(1);
  });

  it("returns an empty array when there are no favorite movies", async () => {
    (prismaClient.movie.findMany as jest.Mock).mockResolvedValue([]);

    const service = new SearchAllFavoriteMoviesService();
    const results = await service.execute();

    expect(results).toEqual([]);
  });
});
