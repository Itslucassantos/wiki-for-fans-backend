import prismaClient from "../../../src/prisma";
import { SaveFavoriteMovieService } from "../../../src/services/internal/movie/SaveFavoriteMovieService";

jest.mock("../../../src/prisma");

describe("SaveFavoriteMovieService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Saves a favorite movie and returns it", async () => {
    const movie = {
      id: 1,
      title: "bloodsport",
      favorite: true,
    };
    (prismaClient.movie.update as jest.Mock).mockResolvedValue(movie);

    const service = new SaveFavoriteMovieService();
    const result = await service.execute({ id: 1, favorite: true });

    expect(prismaClient.movie.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { favorite: true },
    });
    expect(prismaClient.movie.update).toHaveBeenCalledTimes(1);
    expect(result).toEqual(movie);
  });
});
