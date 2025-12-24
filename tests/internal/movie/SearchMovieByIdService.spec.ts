import prismaClient from "../../../src/prisma";
import { SearchMovieByIdService } from "../../../src/services/internal/movie/SearchMovieByIdService";

jest.mock("../../../src/prisma");

describe("SearchMovieByIdService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns a movie by id including characters", async () => {
    const movie = {
      id: 1,
      title: "bloodsport",
    };
    (prismaClient.movie.findUnique as jest.Mock).mockResolvedValue(movie);

    const service = new SearchMovieByIdService();
    const result = await service.execute({ id: 1 });

    expect(prismaClient.movie.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
      include: {
        characters: true,
      },
    });
    expect(prismaClient.movie.findUnique).toHaveBeenCalledTimes(1);
    expect(result).toEqual(movie);
  });

  it("returns null when movie is not found", async () => {
    (prismaClient.movie.findUnique as jest.Mock).mockResolvedValue(null);

    const service = new SearchMovieByIdService();
    const result = await service.execute({ id: 2 });

    expect(result).toBeNull();
    expect(prismaClient.movie.findUnique).toHaveBeenCalledTimes(1);
  });
});
