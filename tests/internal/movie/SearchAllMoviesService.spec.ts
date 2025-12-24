import prismaClient from "../../../src/prisma";
import { SearchAllMoviesService } from "../../../src/services/internal/movie/SearchAllMoviesService";

jest.mock("../../../src/prisma");

describe("SearchAllMoviesService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns all movies", async () => {
    const movies = [{ title: "bloodsport" }, { title: "rocky balboa 1" }];
    (prismaClient.movie.findMany as jest.Mock).mockResolvedValue(movies);

    const service = new SearchAllMoviesService();
    const results = await service.execute();

    expect(results).toEqual(movies);
    expect(prismaClient.movie.findMany).toHaveBeenCalledWith();
    expect(prismaClient.movie.findMany).toHaveBeenCalledTimes(1);
  });

  it("returns an empty array when there are no movies", async () => {
    (prismaClient.movie.findMany as jest.Mock).mockResolvedValue([]);

    const service = new SearchAllMoviesService();
    const results = await service.execute();

    expect(results).toEqual([]);
    expect(prismaClient.movie.findMany).toHaveBeenCalledWith();
  });
});
