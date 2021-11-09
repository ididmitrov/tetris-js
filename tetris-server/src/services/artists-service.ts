import { Artist } from "../schema/artists";
import * as mongoose from "mongoose";

export const createArtist = async (artist: any) => {
  const cArtist = new Artist({
    _id: mongoose.Types.ObjectId(),
    ...artist,
  });

  //try catch
  const res = await cArtist.save();
  console.log("res artist", res);
  return res;
};
