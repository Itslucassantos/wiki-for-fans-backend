import prismaClient from "../../../src/prisma";
import { SaveMovieService } from "../../../src/services/internal/movie/SaveMovieService";
import { MovieProps } from "../../../src/types/movie.types";

jest.mock("../../../src/prisma");

describe("SaveMovieService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("saves a movie with lowercase title and returns it", async () => {
    const movieReq = {
      title: "Bloodsport",
    } as MovieProps;

    const savedMovie = {
      id: 1,
      title: "bloodsport",
    };

    (prismaClient.movie.create as jest.Mock).mockResolvedValue(savedMovie);

    const service = new SaveMovieService();
    const result = await service.execute(movieReq);

    expect(prismaClient.movie.create).toHaveBeenCalledWith({
      data: {
        ...movieReq,
        title: "bloodsport",
      },
    });
    expect(prismaClient.movie.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual(savedMovie);
  });
});
