import * as mongoose from "mongoose";

export interface IArtist extends mongoose.Document {
  _id: string;
  artistName: string;
  artistQuote: string;
  artistImageUrl: string;
  artistBackgroundImageUrl: string;
  artistLinkedInstagramAccount: string;
  artistLinkedFacebookAccount: string;
  artistLinkedSoundcloudAccount: string;
  eventsPlayedOn: string[];
}

const ArtistSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  artistName: { type: String, required: true },
  artistQuote: { type: String, required: true },
  artistImageUrl: { type: String, required: true },
  artistBackgroundImageUrl: { type: String, required: true },
  artistLinkedInstagramAccount: { type: String, required: true },
  artistLinkedFacebookAccount: { type: String, required: true },
  artistLinkedSoundcloudAccount: { type: String, required: true },
  eventsPlayedOn: { type: [mongoose.Schema.Types.ObjectId], ref: "Event" },
});

export const Artist = mongoose.model<IArtist>("Artist", ArtistSchema);
