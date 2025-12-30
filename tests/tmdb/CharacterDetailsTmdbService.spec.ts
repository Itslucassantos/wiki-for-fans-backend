jest.mock("../../src/http/api", () => ({
  get: jest.fn(),
}));

jest.mock("../../src/utils/ImageUrlBuilder", () => ({
  ImageUrlBuilder: {
    build: jest.fn(),
  },
}));

import api from "../../src/http/api";
import { CharacterDetailsTmdbService } from "../../src/services/tmdb/CharacterDetailsTmdbService";
import { ImageUrlBuilder } from "../../src/utils/ImageUrlBuilder";

describe("CharacterDetailsTmdbService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.TMDB_API_KEY = "test-api-key";
  });

  it("fetches actor details from TMDB and maps response correctly", async () => {
    const tmdbResponse = {
      id: 100,
      name: "Bryan Cranston",
      biography: "Some biography",
      birthday: "1956-03-07",
      deathday: null,
      place_of_birth: "Hollywood, USA",
      profile_path: "/bryan.jpg",
      popularity: 50,
      gender: 2,
      known_for_department: "Acting",
      also_known_as: ["Bryan Lee Cranston"],
      homepage: "https://example.com",
      imdb_id: "nm0186505",
    };

    (api.get as jest.Mock).mockResolvedValue({
      data: tmdbResponse,
    });

    (ImageUrlBuilder.build as jest.Mock).mockReturnValue(
      "https://image.tmdb.org/t/p/bryan.jpg"
    );

    const service = new CharacterDetailsTmdbService();

    const result = await service.execute({
      id: 100,
      character: "Walter White",
    });

    expect(api.get).toHaveBeenCalledWith("/person/100", {
      params: {
        api_key: "test-api-key",
        language: "en-US",
      },
    });

    expect(ImageUrlBuilder.build).toHaveBeenCalledWith("/bryan.jpg");

    expect(result).toEqual({
      id: 100,
      characterName: "Walter White",
      actorId: 100,
      actorName: "Bryan Cranston",
      actorBiography: "Some biography",
      actorBirthday: "1956-03-07",
      actorDeathday: null,
      actorAge: expect.any(Number),
      actorPlaceOfBirth: "Hollywood, USA",
      actorProfileImage: "https://image.tmdb.org/t/p/bryan.jpg",
      actorPopularity: 50,
      actorGender: "Male",
      actorKnownFor: "Acting",
      actorAlsoKnownAs: ["Bryan Lee Cranston"],
      actorHomepage: "https://example.com",
      actorImdbId: "nm0186505",
    });
  });

  it("returns null age when birthday is null", async () => {
    (api.get as jest.Mock).mockResolvedValue({
      data: {
        id: 1,
        name: "Actor",
        biography: "",
        birthday: null,
        deathday: null,
        place_of_birth: null,
        profile_path: null,
        popularity: 10,
        gender: 0,
        known_for_department: "Acting",
        also_known_as: [],
        homepage: null,
        imdb_id: "id",
      },
    });

    (ImageUrlBuilder.build as jest.Mock).mockReturnValue(null);

    const service = new CharacterDetailsTmdbService();
    const result = await service.execute({ id: 1, character: "Test" });

    expect(result.actorAge).toBeNull();
    expect(result.actorGender).toBe("Unknown");
  });

  it("throws if TMDB request fails", async () => {
    (api.get as jest.Mock).mockRejectedValue(new Error("TMDB error"));

    const service = new CharacterDetailsTmdbService();

    await expect(service.execute({ id: 1, character: "Test" })).rejects.toThrow(
      "TMDB error"
    );
  });
});
