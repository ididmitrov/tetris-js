import * as express from "express";
import { Artist, IArtist } from "../schema/artists";
import { createArtist } from "../services/artists-service";
export const ArtistsRouter = express.Router();
const pageSize = 20;

try {
  ArtistsRouter.get("/all", async (req, res) => {
    const { currentPage } = req.body;
    const take = currentPage * pageSize;
    const skip = take - pageSize;

    const count = await Artist.find().countDocuments();
    const totalPages = Math.ceil(count / pageSize);
    const artists: IArtist[] = await Artist.find().skip(skip).limit(pageSize);
    res.status(200).send({ artists: artists, totalPages });
  });
  ArtistsRouter.post("/create", async (req, res) => {
    const artist: IArtist = await createArtist(req.body);
    res
      .status(200)
      .json({ msg: "artist created succesfully", artistId: artist._id });
  });
  ArtistsRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const artist: IArtist = await Artist.findById(id);
    res.send(artist);
  });
} catch (err) {
  console.log(err);
}
