import * as mongoose from "mongoose";

export interface IEvent extends Document {
  _id: string;
  eventName: string;
  eventDate: string;
  eventPlace: string;
  eventImageUrl: string;
  eventBackgroundImageUrl: string;
  eventTrailerUrl: string;
  eventTicketPrice: number;
  eventAftermoovieUrl: string;
  eventPhotoGalleryUrls: string[];
  artistsPlayedOnEvent: string[];
}

const EventSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  eventName: { type: String, required: true },
  eventDate: { type: String, required: true },
  eventPlace: { type: String, required: true },
  eventImageUrl: { type: String, required: true },
  eventBackgroundImageUrl: { type: String, required: true },
  eventTrailerUrl: { type: String, required: true },
  eventTicketPrice: { type: Number, required: true },
  eventAftermoovieUrl: { type: String, required: true },
  eventPhotoGalleryUrls: { type: [String], required: true },
  artistsPlayedOnEvent: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Artist",
  },
});

export const Event = mongoose.model<IEvent>("Event", EventSchema);
