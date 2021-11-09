export interface IEventRequest {
  _id: string;
  eventName: string;
  eventDate: string;
  eventImageUrl: string;
  eventTrailerUrl: string;
  eventAftermoovieUrl: string;
  eventPhotoGalleryUrls: string[];
  artistsPlayedOnEvent: string[];
}
