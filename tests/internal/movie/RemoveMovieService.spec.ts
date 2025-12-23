import prismaClient from "../../../src/prisma";
import { RemoveMovieService } from "../../../src/services/internal/movie/RemoveMovieService";

jest.mock("../../../src/prisma");

describe("RemoveMovieService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("removes a movie by id and returns it", async () => {
    const deleteMovie = {
      id: 1,
      title: "bloodsport",
    };
    (prismaClient.movie.delete as jest.Mock).mockResolvedValue(deleteMovie);

    const service = new RemoveMovieService();
    const result = await service.execute({ id: 1 });

    expect(prismaClient.movie.delete).toHaveBeenCalledWith({
      where: { id: 1 },
    });
    expect(prismaClient.movie.delete).toHaveBeenCalledTimes(1);
    expect(result).toEqual(deleteMovie);
  });
});
