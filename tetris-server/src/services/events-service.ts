import { Event } from "../schema/events";
import * as mongoose from "mongoose";

export const createEvent = async (event: any) => {
  const cEvent = new Event({
    _id: mongoose.Types.ObjectId(),
    ...event,
  });

  //try catch
  const res = await cEvent.save();
  console.log("res event", res);
  return res;
};
