import { NextFunction, Request, Response } from "express";
import prismaClient from "../../prisma";

export async function searchMovieById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.query.id || req.body.id);

  const movie = await prismaClient.movie.findUnique({
    where: { id },
  });

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  return next();
}
